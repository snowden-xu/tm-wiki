import { Injectable } from '@nestjs/common';

@Injectable()
export class EntryService {
  // 获取词条列表
  getEntryList(): Array<string> {
    return ['1', '2'];
  }

  // 新增词条
  addEntry(): string {
    return 'add a new entry';
  }

  // 更新词条
  updateEntry(): string {
    return 'update a entry';
  }

  // 删除词条
  deleteEntry(): string {
    return 'delete a entry';
  }
}
