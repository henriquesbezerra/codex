package main

import "fmt"

func main() {
	anoNaciomento := 1992
	anoMorte := 2300
	for anoNaciomento <= anoMorte {
		fmt.Println(anoNaciomento)
		anoNaciomento++
	}
}
