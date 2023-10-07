package main

import "fmt"

type pessoa struct {
	nome  string
	idade int
}

type usuairo struct {
	pessoa
	email string
	senha string
}

func (u *usuairo) getNascimento() int {
	return 2003 - u.idade
}

func main() {

	henrique := usuairo{
		pessoa: pessoa{"henrique", 10},
		email:  "email.com",
	}

	fmt.Println(henrique.nome)

	fmt.Println(henrique.getNascimento())

	structAnon := struct {
		nome string
	}{
		"fulano",
	}

	fmt.Println(structAnon.nome)

}
