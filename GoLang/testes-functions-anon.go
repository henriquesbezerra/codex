package main

import "fmt"

func main() {

	// função anonima como variavel
	fa := func() {
		fmt.Println("Eita")
	}

	fa()

	// função anonima sem variavel autoinvocavel
	func() {
		fmt.Println("Eita")
	}()

}
