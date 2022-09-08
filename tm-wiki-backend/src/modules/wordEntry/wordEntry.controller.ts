import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WordEntryService } from './wordEntry.service';
import { AddWordEntryDto } from './dto/add-wordEntry.dto';
import { WordEntry } from './schemas/wordEntry.schema';

@Controller('wordEntry')
export class WordEntryController {
  constructor(private readonly entryService: WordEntryService) {}

  @Get('list')
  async getEntryList(): Promise<WordEntry[]> {
    return this.entryService.getWordEntryList();
  }

  @Post('add')
  async addEntry(@Body() addWordEntryDto: AddWordEntryDto) {
    await this.entryService.addWordEntry(addWordEntryDto);
  }

  @Put(':id')
  async updateEntry(
    @Param('id') id: string,
    @Body() addWordEntryDto: AddWordEntryDto,
  ) {
    return this.entryService.updateWordEntry(id, addWordEntryDto);
  }

  @Delete(':id')
  async deleteEntry(@Param('id') id: string) {
    console.log(id, 'id');
    return this.entryService.deleteWordEntry(id);
  }
}
