import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../repository/user.repository";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  signIn() {
    return;
  }

  signOut() {
    return;
  }

  verifyToken() {
    return;
  }
}
