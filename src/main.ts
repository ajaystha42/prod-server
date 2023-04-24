import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    // origin: 'https://fuse-products.vercel.app',
    origin: [
      'https://fuse-products.vercel.app',
      'https://prod-host-ts.vercel.app',
      'https://prod-cart-ts.vercel.app',
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
