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
  long digits = 0;
  int digits_quantity = 0;

  /* Pega número do cartão */
  do
  {
    card_number = get_long("Digite os números do cartão (sem caracteres especiais): ");
  } while (card_number <= 0);

  digits = card_number;

  /* Descobrir o número de digitos */
  while (digits > 0)
  {
    digits = round(digits / 10);
    digits_quantity++;
  }

  /* Aplicação do algoritmo de Luhn*/

  return 0;
}
