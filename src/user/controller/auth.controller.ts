import { Body, Controller, Post, Res } from "@nestjs/common";
import { SignInRequest } from "@/user/dto/sign-in-request.dto";
import { AuthService } from "@/user/service/auth.service";
import { Response } from "express";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async signIn(
    @Body() signInRequest: SignInRequest,
    @Res({ passthrough: true }) signInResponse: Response
  ): Promise<string> {
    return this.authService.signIn(signInRequest, signInResponse);
  }
}
