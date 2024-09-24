import { Module } from '@nestjs/common';
import { EmailController } from './controllers/email.controller'; // Add this line
import { SendEmailUseCase } from '@app/use-cases/send-email';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [SendEmailUseCase],
})
export class HttpModule {}
