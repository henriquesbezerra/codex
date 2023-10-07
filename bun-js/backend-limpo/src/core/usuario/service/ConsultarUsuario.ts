import CasoDeUso from "../../shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

type Entrada = { 
  email: string;
}

export default class ConsultarUsuario  implements CasoDeUso<Entrada, Usuario | null>{

  constructor(
    private readonly repositorio: RepositorioUsuario
  ){}

  async executar(dados: Entrada): Promise<Usuario | null> {
    const { email } = dados;

    const usuarioExistente = await this.repositorio.consultarPorEmail(email);
    
    return usuarioExistente;
  }

}