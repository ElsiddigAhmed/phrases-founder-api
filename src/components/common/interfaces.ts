import { Document } from 'mongoose';

export interface Category extends Document {
  readonly _id: string;
  readonly category: string;
  readonly createdAt: Date;
}

export interface Accent extends Document {
  readonly _id: string;
  readonly accent: string;
  readonly createdAt: Date;
}

export interface Phrase extends Document {
  readonly _id: string;
  readonly phrase: string;
  readonly meaning: string;
  readonly category: string;
  readonly accent: string;
  readonly createdAt: Date;
}
