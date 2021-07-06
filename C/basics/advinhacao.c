// Import de bibliteca padrão de entrada e saida.
#include <stdio.h>

// função principal de um programa C
int main()
{

  // Declaração de uma variável inteira com valor 42
  int secret_number = 42;

  // Declaração de variável que irá receber um valor do terminal
  int input = 0;

  // Caracter especial \n utilizado para pular linha
  printf("\n***********************************\n");
  printf("* Bem vindo ao jogo da advinhação *\n");
  printf("***********************************\n\n");

  printf("Você precisa descobrir o número secreto\n");
  printf("Digite um número inteiro até descobrir o segredo!\n");

  // comando while, é um laço de repetição
  // uma ação que ira se repetir enquanto determinada condição correr
  while(input != secret_number){

    // mensagem de orientação ao usuário digitar um número
    printf("\nDigite um número: ");

    // Comando para entrada de dados. Salvando o valor digitado
    // na váriavel que criamos previamente.
    scanf("%d", &input);

    // IF comando condicional, faz uma comparação e se verdadeiro
    // executa o primeiro bloco, se não executa o segundo
    if(input != secret_number)
    {
      // Primeiro bloco
      printf("\nSeu chute foi: %d, Tente novamente...\n", input);
    
    }else{ // ELSE significa algo como 'Se não'
      // Segundo bloco
      printf("\nParabéns! Você  acertou, o número secreto era: %d", secret_number);
    }
  }
  

  printf("\n\n");

  return 0;
}

/***
 * Compilamos esse programa com
 * gcc hello-world.c -o hello-worl.exe [ ou .out]
 * 
 * gcc => compilador
 * hello-world.c  => nome do arquivo com o código
 * -o => local onde o código binário será escrito
 * hello-worl.exe [ ou .out]  => programa pronto para ser executado
*/ 
 