import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WordEntryService } from './wordEntry.service';
import { AddWordEntryDto } from './dto/add-wordEntry.dto';
import { WordEntry } from './schemas/wordEntry.schema';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('wordEntry')
@ApiTags('wordEntry 词条')
export class WordEntryController {
  constructor(private readonly entryService: WordEntryService) {}

  @Get('list')
  @ApiOperation({ summary: '获取词条列表' })
  async getEntryList(): Promise<WordEntry[]> {
    return this.entryService.getWordEntryList();
  }

  @Post('add')
  @ApiOperation({ summary: '新增词条' })
  async addEntry(@Body() addWordEntryDto: AddWordEntryDto) {
    await this.entryService.addWordEntry(addWordEntryDto);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新词条' })
  async updateEntry(
    @Param('id') id: string,
    @Body() addWordEntryDto: AddWordEntryDto,
  ) {
    return this.entryService.updateWordEntry(id, addWordEntryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除词条' })
  async deleteEntry(@Param('id') id: string) {
    console.log(id, 'id');
    return this.entryService.deleteWordEntry(id);
  }
}
