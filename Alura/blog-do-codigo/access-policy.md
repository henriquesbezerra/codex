## Política de acesso ao conteúdo


### Propósito
Esse documento contém todas as informações necessárias sobre controle e acesso ao conteúdo no blog do código.

Esse documento deve ser lido por todas as pessoas que trabalham no blog do código.

### Autenticação
Antes de prosseguir com o uso da API, é necessários criar uma nova conta através da rota ```POST /usuario```, e em seguida, verificar o email da nova conta através da rota ```GET /usuario/verificaemail/:token```.

Com a conta criada e verificada, use a rota de ```POST /usuario/login``` para obter um token de acesso através do cabeçalho ```Authorization``` na resposta. Use esse cabeçalho nas demais requisições para se autenticar com a API e prosseguir ao controle de acesso ao conteúdo.

### Controle de conteúdo do blog

- Cargo Assinante: 
  - Ler os posts do blog.
- Cargo Editor: 
  - Cadastrar novos posts;
  - Gerenciar seus posts.
- Admin:
  - Gerenciar usuários;
  - Gerenciar posts.

