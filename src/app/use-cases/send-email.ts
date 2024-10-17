import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

import { Email } from '../entities/email';

dotenv.config();

const smtpConfig = {
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

@Injectable()
export class SendEmailUseCase {
  sendEmail = (email: Email) => {
    const transporter = nodemailer.createTransport(smtpConfig);

    const send = () => {
      transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email.to,
        subject: email.subject,
        text: email.body,
        html: `<h1 style="color: #2e97b7;">${email.body}</h1>`,
        attachments: [
          {
            filename: email.filename,
            path: email.path,
            cid: email.cid,
          },
        ],
      });

      transporter.verify((error) => {
        if (error) {
          console.error('Error verifying SMTP transporter:', error);
        } else {
          console.log('SMTP transporter verified');
        }
      });
    };

    return send();
  };
}
