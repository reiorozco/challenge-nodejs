import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Odd_numbersDocument = OddNumber & Document;

@Schema()
export class OddNumber {
  @Prop()
  oddNumber: number;

  @Prop({ default: Date.now })
  dateCreated: number;
}

export const Odd_numbersSchema = SchemaFactory.createForClass(OddNumber);
