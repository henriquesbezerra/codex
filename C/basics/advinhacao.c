// Import de bibliteca padrão de entrada e saida.
#include <stdio.h>

// Diretiva ou constante
#define NUMERO_TENTATIVAS 5

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
  int tentativas = 1;
  while(input != secret_number){
    
    if(tentativas > 1){
      printf("\nTente novamente...");
    }

    printf("\nTentativa %d ", tentativas);
    // mensagem de orientação ao usuário digitar um número
    printf("\nDigite um número: ");

    // Comando para entrada de dados. Salvando o valor digitado
    // na váriavel que criamos previamente.
    scanf("%d", &input);

    // Evitando número negativos
    if(input < 0) {
      printf("\nNão é permitido número negativos!\n");     
      continue;
    }

    // IF comando condicional, faz uma comparação e se verdadeiro
    // executa o primeiro bloco, se não executa o segundo
    int acerto = input < secret_number; // consegui fazer comparação na atribuição de uma variavel
    // e testar se seu valor é verdadeiro o falso
    // 1 -> verdadeiro
    // 0 -> falso
    if(acerto)
    {
      // Primeiro bloco
      printf("\nSeu chute foi MENOR que o número secreto: %d\n", input);
    
    }else if(input > secret_number)
    {
      // Segundo bloco
      printf("\nSeu chute foi MAIOR que o número secreto: %d\n", input);  

    }else{ // ELSE significa algo como 'Se não'
      // Terceiro bloco
      printf("\nParabéns! Você  acertou, na %dº tentativa! \no número secreto era: %d\n", tentativas, secret_number);
    }

    // Incrementa o contato que limita as tentativas
    tentativas++;  
  }  

  printf("\n***************\n");
  printf("* FIM DE JOGO *\n");
  printf("***************\n\n");

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
 