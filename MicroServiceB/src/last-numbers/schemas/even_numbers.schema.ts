import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Even_numbersDocument = EvenNumber & Document;

@Schema()
export class EvenNumber {
  @Prop()
  evenNumber: number;

  @Prop({ default: Date.now })
  dateCreated: number;
}

export const Even_numbersSchema = SchemaFactory.createForClass(EvenNumber);
