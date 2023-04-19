package main

import "fmt"

func main() {
	// empura a execução da declaração para o final do escopo atual, através de um pilha
	defer fmt.Println("1")
	fmt.Println("2")
	fmt.Println("3")
	fmt.Println("5")

}
