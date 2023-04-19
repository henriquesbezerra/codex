package main

import "fmt"

func main() {

	total, length, msg := somaV1("Soma de tudo", 10, 20, 30)
	fmt.Println(msg, length, total)

	si := []int{15, 30, 2}
	total, length, msg = somaV1("Soma de tudo", si...)
	fmt.Println(msg, length, total)
}

// função variádica aceita um número indeterminado de parametros
// a definição do parametro variádico deve ser o último na lista de parametros
// parametro -> construção de funcao
// argumento -> utilizacao do valor dentro da funçao
func somaV1(s string, x ...int) (int, int, string) {

	soma := 0
	for _, v := range x {
		soma += v
	}

	return soma, len(x), s

}
