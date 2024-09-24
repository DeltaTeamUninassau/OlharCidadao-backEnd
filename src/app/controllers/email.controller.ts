import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { IEmailPayload, IEmailBody } from '../entities/Email';
import { EmailService } from '../services/email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly appService: EmailService) {}

  @Post('send')
  @UseInterceptors(FileInterceptor('file'))
  sendEmail(
    @Body() emailBody: IEmailBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const email: IEmailPayload = {
      to: emailBody.to,
      subject: emailBody.subject,
      body: emailBody.body,
      cid: emailBody.cid,
      filename: file.originalname,
      path: file.path,
    };

    return this.appService.sendEmail(email);
  }
}
