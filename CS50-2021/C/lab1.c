/**
 * Lab 01: População
 * Crescimento populacional
 * 
 * **/
#include <stdio.h>
#include <math.h>
#include <cs50.h>

int main(void)
{
  int starts = 0;
  int ends = 0;

  // TODO: Solicite o valor inicial ao usuário
  do
  {
    starts = get_int("valor inicial: ");
  } while (starts < 9);

  // TODO: Solicite o valor final ao usuário
  do
  {
    ends = get_int("valor final: ");
  } while (ends < starts);

  // TODO: Calcule o número de anos até o limite

  int nascimentos = 0;
  int mortes = 0;
  int crescimento = 0;
  int anos = 0;
  do
  {
    nascimentos = starts / 3;
    mortes = starts / 4;
    starts = (starts + nascimentos) - mortes;

    anos++;

  } while (starts < ends);

  // TODO: Imprima o número de anos
  printf("Anos: %d \n", anos);

  return 0;
}
