package main

import "fmt"

type meutipo int

var x meutipo
var y uint8
var a rune // = int32 (UTF-8) = 4 bytes

const (
	fulano = "Fulano"
	u      = 30
	k      = iota
)

func main() {

	// s := "Hello, henri"
	// sb := []byte(s)

	// fmt.Printf("%v,\n %#U,\n %#x", sb[0], sb[0], sb[0])

	// fmt.Println(k)

	// i := 0x23
	// z := i + 10

	// fmt.Printf("%v, %X", z, z)

	// if x := 10; x != 10 {
	// 	fmt.Println(x)
	// }

	z := 10
	switch z {
	case 10:
		fmt.Println("eita")
	case 30:
		fmt.Println("eita")
	default:
		fmt.Println("eita 2")

	}

	// for i := 0; i < 5; i++ {
	// 	fmt.Println(i)

	// 	for g := 0; g < 2; g++ {
	// 		fmt.Println(i * g)
	// 	}

	// }

	// j := 0
	// for {
	// 	if j == 2 {
	// 		break
	// 	}
	// 	j++
	// }

	// h := 0
	// for h < 10 {
	// 	fmt.Println("Eita")
	// 	h++
	// }

	// person := map[string]interface{}{
	// 	"nome": "Henrique",
	// }
	// fmt.Println(person["nome"])

}
