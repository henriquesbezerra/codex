#include <stdio.h>
#include <cs50.h>

int main(void)
{
  int tamanho = 0;

  do
  {
    tamanho = get_int("Informe o tamanho (1..8): ");
  } while (tamanho < 1 || tamanho > 8);

  for (int i = 0; i <= tamanho; i++)
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
    printf("\n");
  }

  return 0;
}
