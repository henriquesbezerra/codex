package main

import "fmt"

type pessoa struct {
	nome  string
	idade int
}

func (p *pessoa) getIdade() {
	fmt.Println(p.idade)
}

func main() {

	i := pessoa{"henrique", 10}

	i.getIdade()

}
