import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';

@Module({
  imports: [],
  controllers: [EntryController],
  exports: [],
  providers: [EntryService],
})
export class EntryModule {}
