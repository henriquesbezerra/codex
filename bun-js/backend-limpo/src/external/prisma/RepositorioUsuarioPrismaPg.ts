import { PrismaClient } from "@prisma/client";
import Usuario from "../../core/usuario/model/Usuario";
import RepositorioUsuario from "../../core/usuario/service/RepositorioUsuario";

export default class RepositorioUsuarioPismaPg implements RepositorioUsuario{
  
  private prisma: PrismaClient

  constructor(){
    this.prisma = new PrismaClient()
  }
  
  async consultarPorEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: {
        email,
      }
    })
  }

  async criar(usuario: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: usuario
    })
  }

}