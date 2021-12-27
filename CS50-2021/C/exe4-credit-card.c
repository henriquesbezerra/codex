/**
 * Exercício 04 - Cartões de crédito
 * 
 * **/
#include <stdio.h>
#include <math.h>
#include <cs50.h>

int main(void)
{
  long card_number = 0;
  int counter = 0;
  card_number = get_long("Enters card number: ");
  printf(" \n %ld \n", (card_number + 1) % 10);

  // while (card_number > 0)
  // {
  //   counter += card_number % 10;
  //   card_number = card_number / 10;

  //   printf(" \n %ld,  %d \n", card_number, counter);
  // }

  // printf(" \n %ld,  %d \n", card_number, counter);
  return 0;
}
