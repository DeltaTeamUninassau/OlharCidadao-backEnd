import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ApiTags } from '@nestjs/swagger';

import { Email } from '@app/entities/email';
import { SendEmailUseCase } from '@app/use-cases/send-email';
import { SendEmailBody } from '@infra/http/dtos/send-email-body';

@ApiTags('Email')
@Controller('email')
export class EmailController {
  constructor(private readonly appService: SendEmailUseCase) {}

  @Post('send')
  @UseInterceptors(FileInterceptor('file', { dest: './public/assets' }))
  sendEmail(
    @Body() emailBody: SendEmailBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const email = new Email({
      to: emailBody.to,
      subject: emailBody.subject,
      body: emailBody.body,
      filename: file.originalname,
      path: file.path,
      cid: emailBody.cid,
    });

    const sendEmail = this.appService.sendEmail(email);

    return sendEmail;
  }
}
