import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh'){
    constructor(config: ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('JWT_RF_SECRET'),
            ignoreExpiration: true,
            passReqToCallback: true,
        })
    }

    async validate(req: Request, payload: any){
        const refreshToken = req.headers['authorization'].replace('Bearer','').trim();
        
        return {
            ...payload,
            refreshToken
        }
    }
}