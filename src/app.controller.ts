import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('event')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('async')
  getHelloAsync(): void {
    return this.appService.emitAsync();
  }

  @Get('sync')
  getHelloSync(): void {
    return this.appService.emit();
  }

  @Get('health')
  healthCheck(): string {
    return 'OK';
  }
}
