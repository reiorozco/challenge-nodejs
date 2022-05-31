import { Controller } from '@nestjs/common';
import { LastNumbersService } from './last-numbers.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('last-numbers')
export class LastNumbersController {
  constructor(private readonly lastNumberService: LastNumbersService) {}

  @MessagePattern({ cmd: 'lastNumbers' })
  async lastNumbers(data: number[]) {
    const savedNumbers = await this.lastNumberService.saveData(data);

    return { numbers: savedNumbers };
  }
}
