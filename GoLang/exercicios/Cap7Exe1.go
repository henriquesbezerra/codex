package main

import "fmt"

func main() {
	fmt.Println("Inicio")

	for i := 1; i <= 10000; i++ {
		fmt.Printf("%v,", i)
	}

	fmt.Println("Fim")
}
