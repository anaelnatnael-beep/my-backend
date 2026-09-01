import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow Next.js (port 3000) to send requests to NestJS
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  await app.listen(5000);
  console.log('NestJS backend is running on http://localhost:5000');
}
bootstrap();
