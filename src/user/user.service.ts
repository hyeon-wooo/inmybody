import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthService } from 'src/auth/auth.service';
import { SignUpDTO } from './user.dto';

@Injectable()
export class UserService extends CRUDService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity) repo: Repository<UserEntity>,
    private authService: AuthService,
  ) {
    super(repo);
  }

  createUser(body: SignUpDTO) {
    const { password, nickname, ...rest } = body;
    const salt = this.authService.generateSalt(12);
    const encryptedPassword = this.authService.hashPassword(password, salt);

    const creating = this.repo.create({
      ...rest,
      name: nickname,
      password: encryptedPassword,
      salt,
    });
    return this.repo.save(creating);
  }

  async changePassword(user: UserEntity, password: string) {
    const { salt } = user;
    const encryptedPassword = this.authService.hashPassword(password, salt);
    await this.repo.update(user.id, { password: encryptedPassword });
    return;
  }
}
