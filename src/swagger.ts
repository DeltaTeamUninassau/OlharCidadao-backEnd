import { DocumentBuilder } from '@nestjs/swagger';

export const configSwagger = new DocumentBuilder()
  .setTitle('Olhar Cidadão API')
  .setDescription(
    'A aplicação que permite o cidadão olhar para o seu município',
  )
  .setVersion('1.0')
  .build();
