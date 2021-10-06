import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "@/user/repository/user.repository";
import { SignInRequest } from "@/user/dto/sign-in-request.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async signUp(signInRequest: SignInRequest): Promise<string> {
    signInRequest.password = bcrypt.hashSync(signInRequest.password, 10);
    await this.userRepository.createUser(signInRequest);
    return "200 signUp Success";
  }
}
