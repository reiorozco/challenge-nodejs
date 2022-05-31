import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { SendNumberController } from './send-number.controller';
import { LastNumberController } from './last-number.controller';
import { SendNumberService } from './send-number.service';
import { DB_SERVICE } from './send-number.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DB_SERVICE,
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8877,
        },
      },
    ]),
  ],
  controllers: [SendNumberController, LastNumberController],
  providers: [SendNumberService],
})
export class SendNumberModule {}
