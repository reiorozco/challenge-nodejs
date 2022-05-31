import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  Even_numbersDocument,
  EvenNumber,
} from './schemas/even_numbers.schema';
import { Odd_numbersDocument, OddNumber } from './schemas/odd_numbers.schema';

@Injectable()
export class LastNumbersService {
  constructor(
    @InjectModel(EvenNumber.name)
    private readonly evenNumberModel: Model<Even_numbersDocument>,
    @InjectModel(OddNumber.name)
    private readonly oddNumberModel: Model<Odd_numbersDocument>,
  ) {}

  async saveData(numbers: number[]) {
    for (const num of numbers) {
      if (num % 2 === 0) {
        const evenNum = new this.evenNumberModel({ evenNumber: num });
        await evenNum.save();
      } else {
        const oddNumber = new this.oddNumberModel({ oddNumber: num });
        await oddNumber.save();
      }
    }

    const evenNumbersAdded = await this.evenNumberModel.find().exec();
    const oddNumbersAdded = await this.oddNumberModel.find().exec();

    return {
      evenNumbersAdded,
      oddNumbersAdded,
    };
  }
}
