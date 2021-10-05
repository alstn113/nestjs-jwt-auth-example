import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "@/user/service/user.service";
import { CreateUserDto } from "../dto/user.dto";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  signUp(@Body() body: CreateUserDto): string {
    return this.userService.signUp(body);
  }
}
