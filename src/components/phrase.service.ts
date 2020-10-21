import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phrase, Category, Accent } from './common/interfaces';
@Injectable()
export class PhrasesService {
  constructor(
    @InjectModel('Phrase') private readonly phraseRepository: Model<Phrase>,
    @InjectModel('Category')
    private readonly categoryRepository: Model<Category>,
    @InjectModel('Accent') private readonly accentRepository: Model<Accent>,
  ) {}

  async getPhrases(): Promise<any> {
    return await this.phraseRepository
      .find()
      .populate('category', '_id, category', this.categoryRepository)
      .populate('accent', '_id, accent', this.accentRepository)
      .exec();
  }

  async addPhrase(data): Promise<any> {
    return await new this.phraseRepository(data).save();
  }

  async getCategories(): Promise<any> {
    return await this.categoryRepository.find();
  }

  async getAccents(): Promise<any> {
    return await this.accentRepository.find();
  }

  async getPhrasesByFilter(data): Promise<any> {
    return await this.phraseRepository
      .find(data)
      .populate('category', '_id, category', this.categoryRepository)
      .populate('accent', '_id, accent', this.accentRepository)
      .exec();
  }
}
