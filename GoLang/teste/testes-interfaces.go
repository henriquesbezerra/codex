package main

import (
	"fmt"
	"math"
)

// Definindo uma interface
type Forma interface {
	area() float64
}

// Definindo uma estrutura para retângulo
type Retangulo struct {
	altura  float64
	largura float64
}

// Implementando o método "area" para a estrutura Retangulo
func (r Retangulo) area() float64 {
	return r.altura * r.largura
}

// Definindo uma estrutura para círculo
type Circulo struct {
	raio float64
}

// Implementando o método "area" para a estrutura Circulo
func (c Circulo) area() float64 {
	return math.Pi * c.raio * c.raio
}

// Função que recebe uma interface do tipo Forma como parâmetro
func imprimirArea(f Forma) {
	fmt.Printf("A área da forma é: %0.2f\n", f.area())
}

func main() {
	// Criando uma instância de Retangulo
	retangulo := Retangulo{altura: 10, largura: 5}
	// Chamando a função imprimirArea com o retângulo
	imprimirArea(retangulo)

	// Criando uma instância de Circulo
	circulo := Circulo{raio: 7}
	// Chamando a função imprimirArea com o círculo
	imprimirArea(circulo)
}
