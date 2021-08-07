import { hash } from 'bcryptjs';
import User from '../infra/typeorm/entities/Users';
import AppError from '@shared/errors/AppErrors';
import IUserRepository from '../repositories/IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

class CreateUserService {

  constructor(private repository: IUserRepository){}

  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {   

    const checkUserExists = await this.repository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.', 401);
    }

    const hashedPassword = await hash(password, 8);

    const newUser = await this.repository.create({
      name,
      email,
      password: hashedPassword,
    });  

    return newUser;
  }
}

export default CreateUserService;
