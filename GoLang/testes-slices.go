package main

import "fmt"

type Pessoa struct {
	nome  string
	idade int
}

func main() {

	// x := []interface{}{1, 2, 3, "a", 1.3}
	// x = append(x, 3)
	// fmt.Println(x)

	// for key, value := range x {
	// 	fmt.Println(key, value)
	// }

	pessoas := []Pessoa{
		{nome: "Fulano", idade: 30},
		{nome: "Cicrano", idade: 27},
		{nome: "Beltrano", idade: 27},
		{nome: "xhuleta", idade: 27},
	}

	// for key, value := range pessoas {
	// 	fmt.Println(key, value.nome)
	// }

	fatia := pessoas[3:]
	for key, value := range fatia {
		fmt.Println(key, value.nome)
	}

}
