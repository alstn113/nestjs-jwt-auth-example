import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const configService = app.get(ConfigService);
  const port = configService.get("SERVER_PORT");
  app.use(cookieParser());
  await app.listen(port);
  logger.verbose(`listening on port ${port}`);
}
bootstrap();
