import Elysia from "elysia";
import RegistrarUsuario from "../core/usuario/service/RegistrarUsuario";
import ConsultarUsuario from "../core/usuario/service/ConsultarUsuario";

export default class ConsultarUsuarioController {

  constructor(
    readonly servidor: Elysia,
    readonly casoDeUso: ConsultarUsuario
  ){

    servidor.get('/usuarios/:email', async ({params: {email}})=> {
      const usuario = await casoDeUso.executar({ email });

      if(!usuario){
        throw new Error("Usuário não encontrado");
      }

      return usuario
    })

  }
}