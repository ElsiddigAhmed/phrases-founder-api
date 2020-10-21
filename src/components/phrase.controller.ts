import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';

import { PhrasesService } from './phrase.service';
import { Phrase, AccentQuery } from './common/phrases.dto';
@Controller()
@UsePipes(new ValidationPipe())
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Get('/phrases')
  async getPhrases(): Promise<any> {
    return await this.phrasesService.getPhrases();
  }

  @Post('/phrases')
  async addPhrase(@Body() data: Phrase): Promise<any> {
    return await this.phrasesService.addPhrase(data);
  }

  @Get('/accents')
  async getAccents(): Promise<any> {
    return await this.phrasesService.getAccents();
  }

  @Get('/categories')
  async getCategories(): Promise<any> {
    return await this.phrasesService.getCategories();
  }
  @Get('/phrases/filter')
  async getPhrasesByAccent(@Query() data: AccentQuery): Promise<any> {
    return await this.phrasesService.getPhrasesByFilter(data);
  }
}
