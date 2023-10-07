import { Elysia } from "elysia";
// import RepositorioUsuarioMemoria from "./external/memoria/RepositorioUsuarioMemoria";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import ConsultarUsuario from "./core/usuario/service/ConsultarUsuario";
import ConsultarUsuarioController from "./adapters/ConsultarUsuarioController";
import RepositorioUsuarioPismaPg from "./external/prisma/RepositorioUsuarioPrismaPg";

const app = new Elysia()

// Registrar Rotas
const repositorioUsuario = new RepositorioUsuarioPismaPg();
const registrarUsuario = new RegistrarUsuario(repositorioUsuario);
new RegistrarUsuarioController(app, registrarUsuario)

const consultarUsuario = new ConsultarUsuario(repositorioUsuario)
new ConsultarUsuarioController(app, consultarUsuario);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
