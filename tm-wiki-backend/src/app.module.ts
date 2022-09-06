import { Module } from '@nestjs/common';
import { WordEntryModule } from './modules/wordEntry/wordEntry.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    WordEntryModule,
    MongooseModule.forRoot('mongodb://localhost/tm-wiki'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
