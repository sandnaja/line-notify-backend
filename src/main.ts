import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const configDoc = new DocumentBuilder()
    .setTitle('Nest Line-Notify Backend')
    .setDescription('Line-Notify API')
    .setVersion('1.0')
    .addTag('Line-Notify')
    .build()
  const document = SwaggerModule.createDocument(app, configDoc);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'));
    console.log('[API]', config.get<string>('BASE_URL') + '/api');
  });
}
bootstrap();
