import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { authProviders } from './auth.providers';
import { AuthController } from './authentication/auth.controller';
import { AuthService } from './authentication/auth.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [JwtModule],
  controllers: [AuthController, UserController],
  providers: [AuthService, ...authProviders, UserService],
  exports: [AuthService, UserService],
})
export class AuthModule {}
