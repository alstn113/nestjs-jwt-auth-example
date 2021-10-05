import { Module } from "@nestjs/common";
import { UserController } from "@/user/controller/user.controller";
import { UserService } from "@/user/service/user.service";
import { AuthController } from "@/user/controller/auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "@/user/repository/user.repository";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfigService } from "@/config/jwt.config";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [UserService],
})
export class UserModule {}
