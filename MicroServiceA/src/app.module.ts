import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SendNumberModule } from './send-number/send-number.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@vidly.ol0he.mongodb.net/numbers?retryWrites=true&w=majority`,
    ),
    SendNumberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
