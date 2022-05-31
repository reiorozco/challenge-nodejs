import { Controller, Get, Inject } from '@nestjs/common';
import { DB_SERVICE } from './send-number.constants';
import { ClientProxy } from '@nestjs/microservices';

@Controller('last-numbers')
export class LastNumberController {
  constructor(@Inject(DB_SERVICE) private client: ClientProxy) {}

  @Get()
  async lastNumbers() {
    const pattern = { cmd: 'lastNumbers' };

    return this.client.send(pattern, []);
  }
}
