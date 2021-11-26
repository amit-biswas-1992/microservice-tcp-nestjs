import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private mathService: MathService) {}

  // Define the message pattern for this method
  @MessagePattern('square')
  // Define the logic to be executed
  async square(data: number[])  {
    this.logger.log('Making square ' + data.toString()); // Log something on every call
    return this.mathService.square(data); // use math service to calc result & return
  }
}
