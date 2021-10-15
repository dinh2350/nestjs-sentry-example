import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
async function bootstrap() {
  Sentry.init({
    dsn: 'https://65997b21de4e4efc920adf713ba7c32b@o1038718.ingest.sentry.io/6007222',
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
