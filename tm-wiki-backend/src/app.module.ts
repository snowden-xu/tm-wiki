import { Module } from '@nestjs/common';
import { WordEntryModule } from './modules/wordEntry/wordEntry.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    WordEntryModule,
    MongooseModule.forRoot('mongodb://localhost/wiki-db'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
