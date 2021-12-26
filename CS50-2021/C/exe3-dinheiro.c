/**
 * Exercício 03 - Dinheiro (Versão fácil)
 * 
 * **/
#include <stdio.h>
#include <math.h>
#include <cs50.h>

int main(void)
{
  float troco_devido = 0;
  int troco_devido_cents = 0;
  int total_moedas = 0;

  // Solicitar ao usuário o valor do troco devido em dolaris
  do
  {
    troco_devido = get_float("Troco devido: ");
  } while (troco_devido <= 0);

  troco_devido_cents = round(troco_devido * 100);

  // printf("%f - %d \n", troco_devido, troco_devido_cents);

  // Usar a maior moeda disponível para contabilizar o troco

  // printf("start-> tcoins: %d, troco_devido_cents: %d\n", total_moedas, troco_devido_cents);
  while (troco_devido_cents - 25 >= 0)
  {
    total_moedas++;
    troco_devido_cents = troco_devido_cents - 25;
    // printf("start-> tcoins: %d, troco_devido_cents: %d\n", total_moedas, troco_devido_cents);
  }

  while (troco_devido_cents - 10 >= 0)
  {
    total_moedas++;
    troco_devido_cents = troco_devido_cents - 10;
  }

  while (troco_devido_cents - 5 >= 0)
  {
    total_moedas++;
    troco_devido_cents = troco_devido_cents - 5;
  }

  while (troco_devido_cents - 1 >= 0)
  {
    total_moedas++;
    troco_devido_cents = troco_devido_cents - 1;
  }

  // imprimir total de moedas para o troco
  printf("Total Moedas: %d \n", total_moedas);

  return 0;
}
/*
  OBS.: Na compilacao desse código é necessário adicionar a flag
  -lm ao comando de compilacao para linkar a biblioteca math.h
  a compilacao
*/