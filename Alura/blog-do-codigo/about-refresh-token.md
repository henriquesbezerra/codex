**Estratégia de uso de Refresh Tokens**

A estratégia de refresh tokens é utilizada para re-validar a autenticação do usuário quando seu access token atual
expirou, pois se toda vez que um access token expirar for necessário um novo login, o usuário terá uma péssima experiência de uso da aplicação. Imaginemos um cenário que o tempo de expiração do access token seja de 10 minutos, se não utilizarmos a estratégia dos refresh tokens, a cada 10 minutos seria necessário um novo login.

A estratégia consiste em:

- Quando ocorrer alguma requisição que o servidor responder que o ```access_token``` atual expirou, através de uma segunda rota será enviada uma requisição com um ```refresh_token``` válido.
- O servidor irá verificar a validade do ```refresh_token``` e estando válido, irá retornar um novo ```access_token``` e um novo ```refresh_token```,  como na rota de login. É importante notar que o servidor envia um novo ```refresh_token``` e inválida o antigo, pois essa é uma estratégia utilizada na **identificação de roubo de ```refresh_token```**. Agora o usuário possui novos tokens para realizar novas requisições.

**Validação do Refresh Token**

Para validar um ```refresh_token```, ele é construido através de uma string aleatória, que serve como chave
de uma lista (allowlist) que guarda um payload que identifica o usuário da requisição que está sendo feita. O formato do ```refresh_token``` é diferente do **JWT**, e chama-se *TOKEN OPACO ou OPAQUE TOKEN*, pois ele não carrega nenhuma informação significativa sobre o usuário ou a API, apenas uma string aleatória que só possui sentido dentro do servidor, fora dele é uma string qualquer, que não pode ser lida por serviço.

**Roubo de Refresh Tokens**

Existe a possibilitade de um atacante roubar o refresh token de um usuário, e utiliza-lo para conseguir
um acess_token válido. Para evitar esse caso existe um sistema que faz a identificação do roubo de refresh tokens. Podemos ver uma explicação desse sistema em [SuperTokens](https://supertokens.io/blog/the-best-way-to-securely-manage-user-sessions).

Entrentanto, de forma resumida, a detecção desse tipo de ataque ocorre quando o atacante e a vítima tentam utilizar o token após o ataque. Por exemplo, o refresh token ```0``` de uma vítima foi roubado. Em algum momento, o access token da vítima irá expirar e, por isso, será necessário o uso do refresh token para atualizar o acess_token e nesse cenário tanto a vítima quanto o atacante tentaram atualizar o access_token, então teremos:

  1. O atacante usou o ```refresh_token``` antes e recebeu novos tokens ```novo_refresh_token``` e ```novo_access_token```, invalidando o antigo.
    - Quando ```a vítima``` tentou atualizar seus tokens, ela usou o ```refresh_token``` antigo, que foi invalidado. Isso dispara um alerta para o sistema, pois era esperado que a pessoa tivesse utilizado o ```novo_refresh_token```.

  2. A vítima utilizou o ```refresh_token`` antes, então na tentativa de uso do atacante teremos o mesmo caso do item 1.1.
    - Quando ```o atacante``` tentou atualizar os tokens da vítima, ela usou o ```refresh_token``` antigo, que foi invalidado. Isso dispara um alerta para o sistema, pois era esperado que a pessoa tivesse utilizado o ```novo_refresh_token```.

No alerta que foi disparado em algum dos casos, o sistema irá tratar esse ataque de roubo de refresh_tokens e assim interrompe-lo.
