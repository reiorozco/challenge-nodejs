import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class SendNumberService {
  numberValidator(numbers: number[]) {
    return numbers.map((num) => {
      if (isNaN(num) || typeof num === 'boolean' || num < 0 || num % 1 !== 0)
        throw new BadRequestException('Only positive integers.');

      return num;
    });
  }
}
