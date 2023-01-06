import { LoginReqDto } from 'src/core/dtos/auth/login.req.dto';
import { LoginResDto } from 'src/core/dtos/auth/login.res.dto';
import { RegisterReqDto, RegisterResDto } from 'src/core/dtos/register';

export interface IAuth {
  register(data: RegisterReqDto): Promise<RegisterResDto>;
  login(data: LoginReqDto): Promise<LoginResDto>;
}
