import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SendNumberModule } from './send-number/send-number.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://numbersUser:nJwYEJHUF9CC0PkL@vidly.ol0he.mongodb.net/numbers?retryWrites=true&w=majority',
    ),
    SendNumberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
