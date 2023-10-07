import Usuario from "../model/Usuario"

export default interface RepositorioUsuario{
  consultarPorEmail(email: string): Promise<Usuario | null>;
  criar(usuario: Usuario): Promise<Usuario>;
}