import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { LoginReqDto } from 'src/core/dtos/auth/login.req.dto';
import { LoginResDto } from 'src/core/dtos/auth/login.res.dto';
import { RegisterReqDto, RegisterResDto } from 'src/core/dtos/register';
import { User as UserModel } from 'src/core/models/user';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authServices: AuthService,
    private userServices: UserService,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() dto: RegisterReqDto,
  ): Promise<RegisterResDto | object> {
    try {
      const existingUserEmail = await this.userServices.getByOptions({
        _email: dto.email,
      });
      if (existingUserEmail.length > 0) {
        return new BadRequestException('Existed Email');
      }

      const existingUserPhonenumber = await this.userServices.getByOptions({
        _phonenumber: dto.phonenumber,
      });
      if (existingUserPhonenumber.length > 0) {
        return new BadRequestException('Existed Phone Number');
      }

      const hashedPassword: string = await this.authServices.hashPassword(
        dto.password,
      );
      const newUser = new UserModel();
      newUser.setFullname(dto.fullname);
      newUser.setEmail(dto.email);
      newUser.setPhonenumber(dto.phonenumber);
      newUser.setPassword(hashedPassword);

      const response = await this.userServices.create(newUser);
      return new RegisterResDto(201, 'success', response._email);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.CREATED)
  async login(@Body() dto: LoginReqDto): Promise<LoginResDto | object> {
    try {
      const user = await this.userServices.getByOptions({
        _email: dto.email,
      });
      if (user.length === 0) {
        return new BadRequestException('Not Existed Email');
      }

      const isCorrectPassword: boolean = await this.authServices.verifyPassword(
        dto.password,
        user[0]._password,
      );

      if (!isCorrectPassword) {
        return new BadRequestException('Password is not correct');
      }

      const response = await this.authServices.login({
        email: dto.email,
        userId: user[0].id
      });

      return new LoginResDto(201,response.access_token, response.refresh_token, 'success');
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
