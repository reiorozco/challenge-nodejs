import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LastNumbersService } from './last-numbers.service';

import { Odd_numbersSchema, OddNumber } from './schemas/odd_numbers.schema';
import { Even_numbersSchema, EvenNumber } from './schemas/even_numbers.schema';
import { LastNumbersController } from './last-numbers.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EvenNumber.name, schema: Even_numbersSchema },
      { name: OddNumber.name, schema: Odd_numbersSchema },
    ]),
  ],
  controllers: [LastNumbersController],
  providers: [LastNumbersService],
})
export class LastNumbersModule {}
