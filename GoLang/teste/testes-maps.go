package main

import "fmt"

func main() {

	amigos := map[string]int{
		"alfredo": 1234,
	}

	amigos["gpher"] = 232332

	fmt.Println(amigos)

	alguem, ok := amigos["beltrano"]
	fmt.Println(alguem, ok)

	gph, ehTrue := amigos["gpher"]

	fmt.Println(gph, ehTrue)
}
