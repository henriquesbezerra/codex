
Senhas hash geradas pelo bcrypt.hash possuem sempre um mesmo formato padrão, esse é o
resultado de como o algoritmo utiliza propriedades específicas para deixar as senhas seguras.

Vamos tomar como exemplo a senha hash abaixo para compreender esse formato:

```
$2b$12$zTj3235AX7eMfvxh7xMZHuSoCnKGkGj7JGmJ0a7h/46gCCPFxaxfm
```

No início temo um prefixo entre dois cifrões que representa a *versão do algoritmo*. Os valores possíveis sáo ```2b```, ```2a``` e ```2y```

Em seguida, encontramos o *custom do algoritmo*, esse é o valor que escolhemos e passamos para a função. Esse custo determina quanto tempo o algoritmo levará para ser executado, o que dificulta *ataques de força bruta*, onde o atacante testa várias senhas repetidamente até encontrar a correta. Cada incremento no valor do custo aumenta em duas vezes a demora da execução do algoritmo. Em aplicações atuais, o custo 12 é considerado suficiente.

Após o último cifrão, logo após o valor de custo, temos uma sequência de 53 caracteres, sendo os 22 primeiros o SALT, texto aleatório gerado pela própria função hash. E os 31 restantes é a senha escolhida, que também foi protegida.

Esse formato possibilita ao ```bcrypt``` recuperar as informações necessárias para comparar uma senha de usuário, com sua senha hash cadastrada num banco de dados e então permitir ou bloquear seu acesso.

***O Valor de Custo do Bcrypt***

Como escolhemos um valor de custo ideal? 
Como é dito pela [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#work-factors), não existe uma reposta definitiva para o *custo ideal*. Mas para chegarmos em algum valor podemos analisar fatores como:

- capacidade de processamento da máquina;
- razão performance/segurança da aplição;
- tráfego do site;
- capacidade computacional da época.

Em casos de aplicações que necessitem de um nível elevado de segurança, é necessário ter muito cuidado na escolha de um valor alto para o *valor de custo*, pois se a máquina responsável não suportar, teremos uma brecha para [ataques DoS](https://pt.wikipedia.org/wiki/Ataque_de_nega%C3%A7%C3%A3o_de_servi%C3%A7o)

Uma recomendação geral da OWASP, é que o ***cálculo de hash não deve levar mais que um segundo*** 

Podemos testar valores de custo com bcrypt com o exemplo de código a seguir:

```javascript
const bcrypt = require('bcrypt'); 

for (let custo = 6; custo < 18; custo++) { 
  const tempoInicial = Date.now(); 
  bcrypt.hash('A', custo).then( () => {
    console.log(
      `custo: ${custo}; tempo: ${ Date.now() - tempoInicial} ms`
    ); 
  });
}
```

Podemos também utilizar como referência [benchmarks em servidores relativamente atuais](https://github.com/cptwin/Password-Hashing-Algorithm-Benchmark-Tool-PHABT-/blob/master/Results/Xeon%20E3-1275-v3.csv), onde podemos encontrar fatores entre 12 e 14, onde o ideal fica entre 289ms e 1155ms.

Uma boa prática recomanda pela [Auth0](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/#L-code-bcrypt--code--Best-Practices), é realizar uma pesquisa de UX para encontrar um tempo de espera aceitável em um processo de registro e login de usuários, um caso geral seria entre 100ms e 1000ms. Com o tempo descoberto, usamos como base o maior custo que se aproxime ao custo da máquina responsável pela aplicação.

Mas caso, o custo ainda seja muito grande, existem mecanismos de defesa a ataques DoS, como o protocolo [proof-of-work](https://pt.wikipedia.org/wiki/Prova_de_trabalho#:~:text=Em%20criptografia%2C%20o%20Protocolo%20Prova,ataques%20utilizando%20de%20fun%C3%A7%C3%B5es%20hash.).

