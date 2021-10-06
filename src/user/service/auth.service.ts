import { HttpException, Injectable, Req, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import * as bcrypt from "bcrypt";
import { Response, Request } from "express";
import { UserRepository } from "@/user/repository/user.repository";
import { SignInRequest } from "@/user/dto/sign-in-request.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async signIn(
    signInRequest: SignInRequest,
    @Res({ passthrough: true }) signInResponse: Response
  ): Promise<string> {
    const { email, password } = signInRequest;
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) throw new HttpException("존재하지 않는 이메일입니다", 406);
    const { id: userId, password: hashedPassword } = user;
    if (!hashedPassword || !bcrypt.compareSync(password, hashedPassword)) {
      throw new HttpException("비밀번호 불일치", 406);
    }
    const token = await this.jwtService.signAsync({ userId });
    signInResponse.cookie(this.configService.get("auth.tokenKey"), token);
    return "로그인 성공";
  }

  signOut(@Res({ passthrough: true }) signOutResponse: Response) {
    signOutResponse.clearCookie(this.configService.get("auth.tokenKey"));
    return "로그아웃 성공";
  }
  verifyToken(@Req() request: Request) {
    const token = request.cookies[this.configService.get("auth.tokenKey")];
    if (!token) throw new Error("토큰 없음");

    return !!this.jwtService.verifyAsync(token);
  }
}
