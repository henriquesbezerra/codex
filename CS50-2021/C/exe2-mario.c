/**
 * Exercício 02 - Mario, Mundo 1-1 (Desafio)
 * No inicio do mundo 1-1 no Super Mario Brothers da Nintendo, Mario deve 
 * pular pirâmides de blocos adjacentes. Vamos recriar essa pirâmide em C de forma textual
 * usando hashes (#) para representar cada bloco. O programa permitira que o usuário
 * decida qual será a altura da pirâmide solicitando um número inteiro positivo entre 1 e 8.
 * Quando houver uma entrada de tamanho 8 o programa deverá apresentar:
 *        # #
         ## ##
        ### ###
       #### ####
      ##### #####
     ###### ######
    ####### #######
   ######## ########

    Tamanho: 4               
      # #
     ## ##
    ### ###
   #### ####
 * **/
#include <stdio.h>
#include <cs50.h>

int main(void)
{
  int tamanho = 0;

  do
  {
    tamanho = get_int("Informe o tamanho (1..8): ");
  } while (tamanho < 1 || tamanho > 8);

  for (int i = 1; i <= tamanho; i++)
  {

    for (int j = tamanho; j > 0; j--)
    {
      if (j - i <= 0)
      {
        printf("#");
      }
      else
      {
        printf(" ");
      }
    }

    printf(" ");

    for (int x = 1; x <= tamanho; x++)
    {
      if (x - i > 0)
      {
        printf(" ");
      }
      else
      {
        printf("#");
      }
    }

    printf("\n");
  }

  return 0;
}
