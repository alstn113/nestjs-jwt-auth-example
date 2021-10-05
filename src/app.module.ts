import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import { config } from "@/config/config";
import { DatabaseConfigService } from "@/config/database.config";
import { JwtConfigService } from "./config/jwt.config";
import { ReviewModule } from "@/review/review.module";
import { CategoryModule } from "@/category/category.module";
import { UserModule } from "@/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.test"],
      ignoreEnvFile: process.env.NODE_ENV === "prod",
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
    ReviewModule,
    CategoryModule,
    UserModule,
  ],
})
export class AppModule {}
