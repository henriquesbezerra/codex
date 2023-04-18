package main

import "fmt"

var x [5]int

var ix [5]interface{}

func main() {

	x[0] = 1

	fmt.Println(x)

	ix[0] = "absc"
	ix[1] = 1
	fmt.Println(ix)

}
