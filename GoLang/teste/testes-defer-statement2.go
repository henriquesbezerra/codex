package main

import "fmt"

func main() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recovered from panic:", r)
		}
	}()

	doSomething()
}

func doSomething() {
	defer fmt.Println("Deferred call in doSomething")
	fmt.Println("Doing something")
	panic("Oops, something went wrong!")
}

/**
  Nesse exemplo, a função doSomething faz uma operação e, em seguida, causa um panic.
  O programa principal main chama doSomething usando defer para lidar com a recuperação de um panic.
  O defer é uma instrução que adia a execução de uma função até que a função que a contém retorne.
  Nesse caso, a função anônima dentro do defer verifica se houve um panic e, se houver, imprime uma mensagem de recuperação.
  Em seguida, a função doSomething continua com o defer, imprimindo uma mensagem antes de encerrar.
  O resultado final é que o programa imprime a mensagem de recuperação e, em seguida, a mensagem do defer na função doSomething.

  Observe que, sem o recover, o panic causaria a interrupção do programa com uma mensagem de erro. O uso do recover permite que
  o programa continue executando após um panic.
*/
