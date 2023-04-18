package main

import "fmt"

func main() {

	amigos := map[string]int{
		"alfredo":  1234,
		"alfredo2": 1235,
		"alfredo3": 123556,
	}

	for k, v := range amigos {
		fmt.Println(k, v)
	}

	amigos2 := map[int]int{
		1: 1234,
		3: 123556,
		2: 1235,
	}

	for k, v := range amigos2 {
		fmt.Println(k, v)
	}

	delete(amigos2, 3)

	x := map[string]func(){
		"hello": func() { fmt.Println("printei") },
	}

	x["hello"]()
}
