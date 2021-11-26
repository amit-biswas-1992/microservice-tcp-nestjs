import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: process.env.MICROSERVICE_HOST,
        port: parseInt(process.env.PORT) || 8877,
      },
    });
  }

  public accumulate(data: number[]) {
    return this.client.send<number[], number[]>('square', data);
  }
}
