import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { config } from "@/config/config";
import { DatabaseConfig } from "@/config/database.config";
import { ReviewModule } from "@/review/review.module";
import { CategoryModule } from "@/category/category.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.test"],
      ignoreEnvFile: process.env.NODE_ENV === "prod",
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    ReviewModule,
    CategoryModule,
  ],
})
export class AppModule {}
