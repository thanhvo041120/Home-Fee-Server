import { IsNotEmpty,  IsEmail, IsString } from "class-validator";

export class RegisterReqDto {
    @IsNotEmpty()
    @IsString()
    public fullname: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;

    @IsNotEmpty()
    @IsString()
    public phonenumber: string;
}