import { Injectable } from '@nestjs/common';
import { LoginReqDto } from 'src/core/dtos/auth/login.req.dto';
import { LoginResDto } from 'src/core/dtos/auth/login.res.dto';
import { RegisterReqDto, RegisterResDto } from 'src/core/dtos/register';
import { IAuth } from 'src/core/interfaces/auth/auth.interface';

@Injectable()
export class AuthService implements IAuth{
    register(data: RegisterReqDto): Promise<RegisterResDto> {
        
        throw new Error('Method not implemented.');
    }
    login(data: LoginReqDto): Promise<LoginResDto> {
        throw new Error('Method not implemented.');
    }
}
