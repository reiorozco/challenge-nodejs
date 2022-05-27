import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SendNumberController } from './send-number/send-number.controller';
import { SendNumberService } from './send-number/send-number.service';
import { SendNumberModule } from './send-number/send-number.module';

@Module({
  imports: [SendNumberModule],
  controllers: [AppController, SendNumberController],
  providers: [AppService, SendNumberService],
})
export class AppModule {}
