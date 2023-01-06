import { Inject, Injectable } from '@nestjs/common';
import { LoginReqDto } from 'src/core/dtos/auth/login.req.dto';
import { LoginResDto } from 'src/core/dtos/auth/login.res.dto';
import { RegisterReqDto, RegisterResDto } from 'src/core/dtos/register';
import { IAuth } from 'src/core/interfaces/auth/auth.interface';
import { User as UserEntity } from 'src/__db__/entities/user.entity';
import * as argon from 'argon2';

@Injectable()
export class AuthService implements IAuth {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private authRepositories: typeof UserEntity,
  ) {}
  login(data: object): Promise<{ access_token: string; refresh_token: string; }> {
    throw new Error('Method not implemented.');
  }

  public async hashPassword(password: string): Promise<string> {
    const hashedPassword: string = await argon.hash(password);
    return hashedPassword;
  }
}
