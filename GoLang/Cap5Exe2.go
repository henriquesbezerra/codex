package main

import "fmt"

func main() {
	a := 10 == 12
	b := 12 <= 5
	c := 3 >= 2
	d := 4 > 2
	e := 4 < 2
	f := 4 != 2

	fmt.Println(a, b, c, d, e, f)
}
