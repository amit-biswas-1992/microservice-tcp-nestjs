import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private mathService: MathService) {}

  //POST http://localhost:3000/square
  @Post('square')
  async accumulate(@Body('data') data: number[])  {
    console.log(data);
    this.logger.log('Squaring ' + data.toString()); // Log something on every call
    return this.mathService.accumulate(data); // use math service to calc result & return
  }
}
