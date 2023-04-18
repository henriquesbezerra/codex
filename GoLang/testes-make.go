package main

import "fmt"

func main() {

	slice := make([]int, 5, 10)

	slice = append(slice, 10)
	slice = append(slice, 10)
	slice = append(slice, 10)
	slice = append(slice, 10)
	slice = append(slice, 10)
	slice = append(slice, 10)

	fmt.Println(slice)
	fmt.Println(len(slice))
	fmt.Println(cap(slice))

}
