import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Logger1Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('logger1');
    next();
  }
}
