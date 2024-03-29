import path from 'path';
import fs from 'fs';
import User from '../infra/typeorm/entities/Users';
import uploadConfig from '@config/uploads';
import AppError from '@shared/errors/AppErrors';
import IUserRepository from '../repositories/IUsersRepository';

interface RequestUser {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {

  constructor(private repository: IUserRepository){}

  public async execute({
    user_id,
    avatarFilename,
  }: RequestUser): Promise<User> {

    const user = await this.repository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      // Deletar avatar anterior

      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await this.repository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
