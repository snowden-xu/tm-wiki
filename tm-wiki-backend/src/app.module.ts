import { Module } from '@nestjs/common';
import { EntryModule } from './modules/entry/entry.module';

@Module({
  imports: [EntryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
