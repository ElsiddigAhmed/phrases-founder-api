import { Module } from '@nestjs/common';
import { PhrasesController } from './phrase.controller';
import { PhrasesService } from './phrase.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PhraseSchema, AccentSchema, CategorySchema } from '../database';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forFeature([
      { name: 'Phrase', schema: PhraseSchema },
      { name: 'Category', schema: CategorySchema },
      { name: 'Accent', schema: AccentSchema },
    ]),
  ],
  controllers: [PhrasesController],
  providers: [PhrasesService],
})
export class PhrasesModule {}
