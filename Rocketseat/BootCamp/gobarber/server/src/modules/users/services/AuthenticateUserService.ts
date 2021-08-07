import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import AuthConfig from '@config/auth';
import User from '../infra/typeorm/entities/Users';
import AppError from '@shared/errors/AppErrors';
import IUserRepository from '../repositories/IUsersRepository';

interface IRequestAuth {
  email: string;
  password: string;
}

interface IResponseAuth {
  user: User;
  token: string;
}

class AuthenticateUserService {

  constructor(private repository: IUserRepository){}

  public async execute({
    email,
    password,
  }: IRequestAuth): Promise<IResponseAuth> {   

    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
