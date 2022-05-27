import { Body, Controller, Post } from '@nestjs/common';

import { SendNumberService } from './send-number.service';

@Controller('send-number')
export class SendNumberController {
  constructor(private readonly sendNumberService: SendNumberService) {}

  @Post()
  async sendNumber(@Body('numbers') numbers: number[]) {
    const validatedNumbers = this.sendNumberService.numberValidator(numbers);

    const savedNumbers = await this.sendNumberService.saveData(
      validatedNumbers,
    );

    return { numbers: savedNumbers };
  }
}
