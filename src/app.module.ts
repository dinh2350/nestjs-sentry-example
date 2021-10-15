import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { SentryModule } from './sentry/sentry.module';
import * as Sentry from '@sentry/node';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '11M@chthailai11',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SentryModule.forRoot({
      dsn: 'https://65997b21de4e4efc920adf713ba7c32b@o1038718.ingest.sentry.io/6007222',
      tracesSampleRate: 1.0,
      debug: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Sentry.Handlers.requestHandler()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
