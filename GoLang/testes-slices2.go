package main

import "fmt"

type Pessoa struct {
	nome  string
	idade int
}

func main() {

	ss := [][]int{
		{1, 2, 3},
		{10, 20, 33},
	}

	fmt.Println(ss[1])

	sss := [][]Pessoa{}

	sss = append(sss, []Pessoa{{"henrique", 30}})

	fmt.Println(sss[0])

}
