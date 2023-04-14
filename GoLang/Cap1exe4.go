package main

import "fmt"

type meutipo int

var x meutipo

func main() {
	fmt.Printf("%v, %T\n", x, x)
	x = 42
	fmt.Printf("%v, %T\n", x, x)
}
