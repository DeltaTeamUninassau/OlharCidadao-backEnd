import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SendEmailBody {
  @ApiProperty()
  @IsNotEmpty()
  to: string;

  @ApiProperty()
  @IsNotEmpty()
  subject: string;

  @ApiProperty()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ type: 'file', format: 'binary', required: true })
  @IsNotEmpty()
  file: Express.Multer.File;

  @ApiProperty()
  @IsNotEmpty()
  cid: string;
}
