import { Module } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SentryInterceptor } from './sentry.interceptor';
import { SentryService } from './sentry.service';

export const SENTRY_OPTIONS = 'SENTRY_OPTIONS';

@Module({
  providers: [SentryService],
})
export class SentryModule {
  static forRoot(options: Sentry.NodeOptions) {
    Sentry.init(options);
    return {
      module: SentryModule,
      providers: [
        {
          provide: SENTRY_OPTIONS,
          useValue: options,
        },
        SentryService,
        {
          provide: APP_INTERCEPTOR,
          useClass: SentryInterceptor,
        },
      ],
      exports: [SentryService],
    };
  }
}
