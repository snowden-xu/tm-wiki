import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EntryService } from './entry.service';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get('list')
  getEntryList(): Array<string> {
    return this.entryService.getEntryList();
  }

  @Post('add')
  addEntry(): string {
    return this.entryService.addEntry();
  }

  @Put('update')
  updateEntry(): string {
    return this.entryService.updateEntry();
  }

  @Delete('delete')
  deleteEntry(): string {
    return this.entryService.deleteEntry();
  }
}
