import { Module } from '@nestjs/common';
import { WordEntryController } from './wordEntry.controller';
import { WordEntryService } from './wordEntry.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WordEntry, WordEntrySchema } from './schemas/wordEntry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WordEntry.name, schema: WordEntrySchema },
    ]),
  ],
  controllers: [WordEntryController],
  exports: [],
  providers: [WordEntryService],
})
export class WordEntryModule {}
