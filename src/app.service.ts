import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emitAsync(): void {
    this.eventEmitter.emit('hello-async', 'args');
  }

  emit(): void {
    this.eventEmitter.emit('hello', 'args');
  }

  @OnEvent('hello-async', {
    async: true,
    promisify: true,
  })
  async getHelloAsync(args: string): Promise<string> {
    console.log(args);
    throw new Error('Something happened');
  }

  @OnEvent('hello')
  getHelloSync(args: string): Promise<string> {
    console.log(args);
    throw new Error('Something happened');
  }
}
