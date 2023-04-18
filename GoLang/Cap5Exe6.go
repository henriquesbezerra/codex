package main

import "fmt"

const (
	_ = iota + 2000
	ano1
	ano2
	ano3
	ano4
)

func main() {
	fmt.Println(ano1, ano2, ano3, ano4)
}
