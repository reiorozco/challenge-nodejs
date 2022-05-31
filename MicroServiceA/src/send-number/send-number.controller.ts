import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { SendNumberService } from './send-number.service';
import { DB_SERVICE } from './send-number.constants';

@Controller('send-number')
export class SendNumberController {
  constructor(
    @Inject(DB_SERVICE) private client: ClientProxy,
    private readonly sendNumberService: SendNumberService,
  ) {}

  @Post()
  async sendNumber(@Body('numbers') numbers: number[]) {
    const pattern = { cmd: 'lastNumbers' };
    const payload = this.sendNumberService.numberValidator(numbers);

    return this.client.send(pattern, payload);
  }
}
