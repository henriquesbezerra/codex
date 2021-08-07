import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';

import routes from './routes';
import uploadConfig from '@config/uploads';
import AppError from '@shared/errors/AppErrors';
import '@shared/infra/typeorm';


const app = express();

app.use(cors());

/**
 * Permite o recebimento de JSON pelo Request Body
 */
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'Error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.info('🚀️ Server started on port 3333!');
});


/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end (PUT atualiza tudo, PATCH atualiza informação especifica)
 * DELETE: Deletar uma informação no back-end
 */


/**
 * Tipos de parâmetros:
 *
 * Query Params: Filtros e Paginação;
 * Route Params: Identificar recursos (Atualizar ou Deletar Recursos)
 * Request Body: Conteúdo na hora de criar ou ediar um recurso (JSON)
 */

/**
 * Middleware:
 *
 * É interceptador de requisições que pode interromper totalmente a requisição
 * ou alterar dados da requisição.
 *
 * Utilizar geralmente quando quiser disparar de forma automática para identificar a rota
 */
