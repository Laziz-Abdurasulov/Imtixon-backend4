import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const name = 'Laziz';
    const text = `Qo'ldan kelgancha ${name}`;
    return text;
  }
}
