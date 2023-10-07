import Usuario from "../../core/usuario/model/Usuario";
import RepositorioUsuario from "../../core/usuario/service/RepositorioUsuario";

export default class RepositorioUsuarioMemoria implements RepositorioUsuario{

  private readonly usuarios: Usuario[] = [];

  async consultarPorEmail(email: string): Promise<Usuario | null> {
    return this.usuarios.find(usuario => usuario.email === email) || null
  }

  async criar(usuario: Usuario): Promise<Usuario> {
    const novoUsuario = { id: Math.random(), ...usuario }
    this.usuarios.push(novoUsuario)
    return novoUsuario;
  }

}