import { NestFactory } from '@nestjs/core';
import { EmailModule } from './app/email.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailModule);
  await app.listen(3000);
}
bootstrap();
