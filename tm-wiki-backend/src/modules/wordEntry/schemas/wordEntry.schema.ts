import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WordEntryDocument = WordEntry & Document;

@Schema()
export class WordEntry {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const WordEntrySchema = SchemaFactory.createForClass(WordEntry);
