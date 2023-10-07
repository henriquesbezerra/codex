package entity

import (
	"reflect"
)

type Field struct {
	name  string
	ftype reflect.Type
}

type BaseEntity struct{}

type EntityMeta struct {
	name   string
	schema map[string]reflect.Type
}

type EntityBuilder struct {
	name string
	body map[string]interface{}
}

func (eb *EntityBuilder) Build() interface{} {
	Entity := struct{}{}
	EntityValue := reflect.New(reflect.TypeOf(Entity)).Elem()

	EntityValue.FieldByName(eb.name).Set(reflect.New(reflect.StructOf([]reflect.StructField{{
		Name:      "BaseEntity",
		Type:      reflect.TypeOf(BaseEntity{}),
		Anonymous: true,
	}})))

	EntityValue.FieldByName(eb.name).FieldByName("meta").Set(reflect.ValueOf(EntityMeta{
		name:   eb.name,
		schema: make(map[string]reflect.Type),
	}))

	for name, info := range eb.body {
		fieldValue := EntityValue.FieldByName(name)
		if _, ok := info.(Field); !ok {
			fieldValue.Set(reflect.ValueOf(info))
			EntityValue.FieldByName(eb.name).FieldByName("meta").FieldByName("schema").SetMapIndex(reflect.ValueOf(name), reflect.TypeOf(Function{}))
			continue
		}

		ft := reflect.TypeOf(info)
		fv := reflect.New(ft)
		info.(Field).name = name
		EntityValue.FieldByName(eb.name).FieldByName("meta").FieldByName("schema").SetMapIndex(reflect.ValueOf(name), ft)
		fieldValue.FieldByName("ftype").Set(fv.Elem())
	}

	return EntityValue.Interface()
}

func Entity(name string, body map[string]interface{}) interface{} {
	builder := EntityBuilder{name: name, body: body}
	return builder.Build()
}

func IsEntity(instance interface{}) bool {
	return reflect.TypeOf(instance).Kind() == reflect.Struct &&
		reflect.ValueOf(instance).FieldByName("meta").IsValid() &&
		reflect.ValueOf(instance).FieldByName("meta").Type() == reflect.TypeOf(EntityMeta{})
}
