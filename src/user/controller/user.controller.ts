import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "@/user/service/user.service";
import { SignUpRequest } from "@/user/dto/sign-up-request.dto";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signUp(@Body() signUpRequest: SignUpRequest): Promise<string> {
    return await this.userService.signUp(signUpRequest);
  }
}
