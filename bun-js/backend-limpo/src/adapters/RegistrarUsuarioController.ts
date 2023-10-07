import Elysia from "elysia";
import RegistrarUsuario from "../core/usuario/service/RegistrarUsuario";

export default class RegistrarUsuarioController {

  constructor(
    readonly servidor: Elysia,
    readonly casoDeUso: RegistrarUsuario
  ){

    servidor.post('/usuarios', async ({body})=> {
      const { nome, email, senha } = body as any;
      const result = await casoDeUso.executar({ nome, email, senha });

      return {
        status: 201,
        body: {
          mensagem: 'Usuário criado com sucesso.',
          result
        }
      }
    })

  }
}