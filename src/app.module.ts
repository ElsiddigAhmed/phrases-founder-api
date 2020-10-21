import { Module } from '@nestjs/common';
import {} from './components/phrases.module';
import { PhrasesModule } from './components/phrases.module';
import { MongooseModule } from '@nestjs/mongoose';
import { db } from './configs';

@Module({
  imports: [PhrasesModule, MongooseModule.forRoot(db)],
})
export class AppModule {}
