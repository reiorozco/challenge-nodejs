import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SendNumberController } from './send-number.controller';
import { SendNumberService } from './send-number.service';

import { Odd_numbersSchema, OddNumber } from './schemas/odd_numbers.schema';
import { Even_numbersSchema, EvenNumber } from './schemas/even_numbers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EvenNumber.name, schema: Even_numbersSchema },
      { name: OddNumber.name, schema: Odd_numbersSchema },
    ]),
  ],
  controllers: [SendNumberController],
  providers: [SendNumberService],
})
export class SendNumberModule {}
