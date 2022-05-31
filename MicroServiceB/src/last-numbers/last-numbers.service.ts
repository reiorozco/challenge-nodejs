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

  async getData() {
    const evenNumbersAdded = await this.evenNumberModel
      .find()
      .sort({ dateCreated: 'desc' })
      .limit(10)
      .exec();
    const oddNumbersAdded = await this.oddNumberModel
      .find()
      .sort({ dateCreated: 'desc' })
      .limit(10)
      .exec();

    return [...oddNumbersAdded, ...evenNumbersAdded]
      .sort((a, b) =>
        a.dateCreated > b.dateCreated
          ? 1
          : b.dateCreated > a.dateCreated
          ? -1
          : 0,
      )
      .slice(0, 10);
  }

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

    return await this.getData();
  }
}
