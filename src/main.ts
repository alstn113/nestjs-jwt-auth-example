import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get("SERVER_PORT");
  await app.listen(port);
  logger.verbose(`listening on port ${port}`);
}
bootstrap();
