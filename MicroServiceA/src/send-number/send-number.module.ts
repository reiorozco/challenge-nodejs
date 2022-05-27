import { Module } from '@nestjs/common';

import { SendNumberController } from './send-number.controller';
import { SendNumberService } from './send-number.service';

@Module({
  controllers: [SendNumberController],
  providers: [SendNumberService],
})
export class SendNumberModule {}
