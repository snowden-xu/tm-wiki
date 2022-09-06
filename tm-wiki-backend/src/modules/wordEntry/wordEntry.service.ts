import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddWordEntryDto } from './dto/add-wordEntry.dto';
import { WordEntry, WordEntryDocument } from './schemas/wordEntry.schema';

@Injectable()
export class WordEntryService {
  constructor(
    @InjectModel(WordEntry.name)
    private readonly wordEntryModel: Model<WordEntryDocument>,
  ) {}

  // 获取词条列表
  async getWordEntryList(): Promise<WordEntry[]> {
    return this.wordEntryModel.find().exec();
  }

  // 新增词条
  async addWordEntry(addWordEntryDto: AddWordEntryDto): Promise<WordEntry> {
    const _addWordEntry = new this.wordEntryModel(addWordEntryDto);
    console.log(_addWordEntry, '_addWordEntry');
    // if (!_addWordEntry?.name) {
    //   throw new HttpException('名称不能为空', HttpStatus.OK);
    // }
    return await _addWordEntry.save();
    // const createdCat = await this.wordEntryModel(addWordEntryDto);
    // return createdCat;
  }

  // 更新词条
  async updateWordEntry(id: string) {
    return this.wordEntryModel.findOne({ _id: id }).exec();
  }

  // 删除词条
  async deleteWordEntry(id: string) {
    return await this.wordEntryModel.findByIdAndRemove({ _id: id }).exec();
  }
}
