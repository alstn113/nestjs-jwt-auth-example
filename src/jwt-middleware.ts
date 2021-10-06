import {
  HttpStatus,
  Injectable,
  NestMiddleware,
  Next,
  Req,
  Res,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}
  use(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    try {
      const token = req.cookies[this.configService.get("auth.tokenKey")];
      if (token) {
        const result = this.jwtService.verify(token)["userId"];
        if (!result) throw Error("token expired");
        req.body.userId = this.jwtService.decode(token)["userId"];
      }
      next();
    } catch (e) {
      res.clearCookie(this.configService.get("auth.tokenKey"));
      res.status(HttpStatus.PRECONDITION_FAILED);
      res.send("토큰 만료");
    }
  }
}
