import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../repository/user.repository";
import { CreateUserDto } from "@/user/dto/user.dto";
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  signUp(userbody: CreateUserDto): string {
    try {
      this.userRepository.createUser(userbody);
      return "200 signUp Success";
    } catch (err) {
      throw new Error("400 signUp Failed");
    }
  }
}
