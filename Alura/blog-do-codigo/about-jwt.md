***Estrutura do JSON Web Token***

Um Token JWT, é composto por trës blocos criptografados de informação,
o payload, o cabeçalho e a assinatura.

***O Payload*** é o bloco que contém informações do usuário, como o seu id no banco.
Esse bloco pode ter o seguinte formato:

```json
  {
    "id_usuario": 10
  }
```

***O Cabeçalho*** possui informações como o algoritmo de assinatura utilizadp que geralmente é o HMAC-SHA256,
uma variação do algoritmo de função de hashing e o tipo do token, no caso JWT.

```json
  {
    "alg": "HS256",
    "typ": "JWT"
  }
```

***A Assinatura*** que é o resultado da função HMAC-SHA256, que recebe dois argumento. O cabeçalho e o payload codificados
em ```Base64URL``` e concatenados separados por um ponto, e no segundo argumento um senha secreta conhecida apenas pelo servidor.

```javascript
  HMACSHA256(
    Base64Url(cabeçalho) + "." + Base64Url(payload),
    "senha-conhecida-pelo-servidor"
  )
```

Esses três blocos de informações, são recodificados em ```Base64Url``` e novamente concatenados com ponto. Formando uma estrutura parecida com:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Podemos testar essa geração de token em: [jwt.io](https://jwt.io/)

***Garantia da segurança do token*** 
Quando o servidor recebe um requisição com um token, por exemplo, um POST, para criar um artigo no blog. O servidor pega esse token
e o separa em ```CABEÇALHO.PAYLOAD.ASSINATURA```, Utilizando o cabeçalho e o payload dentro do token, o servidor cria uma nova assinatura utilizando a senha secreta que só ele conhece. Com essa nova assinatura gerada o servidor faz uma comparação com a assinatura que foi enviada junto ao token e se elas corresponderem, temos a garantia de que esse token é válido pois foi realmente gerado pelo servidor, então a requisição é permitada executar. 

Mesmo que um atacante tente enviar uma requisição simulando um token, criando um cabeçalho e um payload, ele não irá conseguir criar a assinatura correta, pois é necessário a senha secreta conhecida apenas pelo servidor e dessa forma, qualquer tentativa de criar uma assinatura irá gerar um assinatura inválida e dessa forma o JWT possibilita uma autencação de usuários segura.

***HMAC-SHA256***
HMAC - Hash-based Message Authentication Code, é um dos algoritmos utilizados na criação da assinatura de um JWT. Ele é um tipo de [autenticador de messagem](https://pt.wikipedia.org/wiki/Autenticador_de_mensagem). envolvendo uma função de hashing e uma chave secreta. Quando a função de hashing utilizada é a SHA256, esse processo de geração de código é nomeado de HMAC-SHA256.

***Base64 e Base64Url***
O [Base64](https://pt.wikipedia.org/wiki/Base64) é um método para codificação de dados para transferência pela internet. É utilizado  frequentemente para transmitir dados binários por meios de transmissão que lidam apenas com texto, como por exemplo para enviar arquivos anexos por e-amil. O Base64Url é uma variação da codificação Base64, criado para permitir seu uso em nomes de arquivos ou endereços URL. Essa codificação é usatada no processo de criação do JWT.