import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LastNumbersModule } from './last-numbers/last-numbers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@vidly.ol0he.mongodb.net/numbers?retryWrites=true&w=majority`,
    ),
    LastNumbersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
