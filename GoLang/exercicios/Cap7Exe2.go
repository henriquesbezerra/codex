package main

import "fmt"

func main() {
	fmt.Println("Inicio")

	for i := 65; i <= 90; i++ {
		l := string(rune(i))
		fmt.Printf("Letra: %v \n", l)
		for x := 0; x < 3; x++ {
			fmt.Printf("%U, ", i)
		}
		fmt.Printf("\n-------\n")
	}

	fmt.Println("Fim")
}
