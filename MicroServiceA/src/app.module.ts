import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SendNumberModule } from './send-number/send-number.module';

@Module({
  imports: [SendNumberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
