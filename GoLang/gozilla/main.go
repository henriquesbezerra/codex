package main

import (
	"encoding/json"
	"fmt"
)

type Entity struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	IsActive bool   `json:"is_active"`
}

func (e *Entity) fromJSON(data []byte) error {
	if err := json.Unmarshal(data, &e); err != nil {
		return err
	}
	return nil
}

type UserEntity struct {
	Entity
	Nome  string
	Idade int16
}

func main() {
	jsonData := `{"id":1, "name":"John Doe", "is_active":true}`

	var e UserEntity

	err := e.fromJSON([]byte(jsonData))

	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Printf("%+v\n", e)
}
