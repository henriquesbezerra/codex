**Estratégia de logout em api com autenticação por tokens**

Em aplicações com autenticação por sessões, é esperado que exista uma funcionalidade
de logout em conjunto a de login, para remover a sessão do usuário guardada no servidor
e assim finalizar seu acesso as funcionalidades privadas. Entretanto, ao utilizar
Json Web Tokens, é necessário criar uma base que funcione como uma blocklist para
os tokens de usuários que fizeram logout, assim é feita uma consulta nessa blocklist
para verifica validar um token a cada vezes que ele for utilizado.

Por isso, num sistema com muitos acessos, essa consulta pode sobrecarregar o servidor. Assim,
pode ser interessante remover a função de logout eliminando a necessidade dessa consulta de 
validação em uma base a cada requisição, mesmo que seja em memória como o Redis.

Para fazermos isso e simular uma operação de logout, podemos através do client, que irá consumir
a API. Por exemplo, um app mobile ou um site, guardar na memória (localStorage) o token
que recebido no login, esse token seria então apagado da memória quando fosse feito o logout, causando
a ilusão de que o acesso foi revogado. Dessa forma bastará aguardar o tempo de expiração do token 
para que ele seja inválidado. Ainda assim, o token poderia ser utilizado por fora dos clients no
intervalo de tempo que ainda estivesse válido, por isso o tempo de expiração do token deve ser diminuído
para dificultar ataques.


**Remoção da busca de usuário a cada requisição**

No inicio das rotas que requerem autenticação, a requisição passa por um *middleware* que verifica
se o usuário está autenticado e busca seu registro na base de usuários, inserindo esse registro
em ```req.user```. Entretando, se alguma dessas rotas possui um fluxo muito alto de solicitações e
não há a necessidade de buscar as informações do usuário na base, apenas saber seu ```ìd```, então
seria ideial modificar essse padrão de desenvolvimento.

Assim, um novo middleware de autenticação apenas verifica o token e insere o id do usuário na
requisição. Dessa maneira, essas rotas não farão qualquer consulta numa base de dados, o que irá melhorar
o tempo de resposta da aplicação, pois requisições que fazem consultas a um banco de dados são em média
10 vezes mais lenta que uma requisição padrão que apenas devolve plaintext.




