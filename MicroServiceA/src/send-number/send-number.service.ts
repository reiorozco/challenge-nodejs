import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class SendNumberService {
  numberValidator(number: number[]) {
    return number.map((num) => {
      if (isNaN(num)) throw new BadRequestException('Only numbers.');

      return num;
    });
  }
}
