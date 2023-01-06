import { Inject, Injectable } from '@nestjs/common';
import { LoginReqDto } from 'src/core/dtos/auth/login.req.dto';
import { LoginResDto } from 'src/core/dtos/auth/login.res.dto';
import { RegisterReqDto, RegisterResDto } from 'src/core/dtos/register';
import { IAuth } from 'src/core/interfaces/auth/auth.interface';
import { User as UserEntity } from 'src/__db__/entities/user.entity';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

declare type LoginProps = {
  email: string;
  userId: number|string;
}
@Injectable()
export class AuthService implements IAuth {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private authRepositories: typeof UserEntity,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}
  
  public async login(
    data: LoginProps,
  ): Promise<{ access_token: string; refresh_token: string }> {
    return this.signToken(data.email, data.userId);
  }

  public async hashPassword(password: string): Promise<string> {
    const hashedPassword: string = await argon.hash(password);
    return hashedPassword;
  }

  public async verifyPassword(
    enteredPassword: string,
    storedPassword: string,
  ): Promise<boolean> {
    const isCorrectPassword = await argon.verify(
      storedPassword,
      enteredPassword,
    );
    return isCorrectPassword;
  }

  private async signToken(
    email: string,
    userId: number| string,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const accessTokenKey = this.config.get<string>('JWT_SECRET');
    const refreshTokenKey = this.config.get<string>('JWT_RF_SECRET');
    const payload = {
      id: userId,
      email: email,
    };
    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret: accessTokenKey,
    });

    const refresh_token = await this.jwt.signAsync(payload, {
      expiresIn: '30d',
      secret: refreshTokenKey,
    });
    return {
      access_token: access_token,
      refresh_token: refresh_token,
    };
  }
}
