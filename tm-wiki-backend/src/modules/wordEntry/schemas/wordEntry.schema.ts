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
  hobby: string;
}

export const WordEntrySchema = SchemaFactory.createForClass(WordEntry);
