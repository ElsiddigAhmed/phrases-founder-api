import { Schema } from 'mongoose';

export const PhraseSchema = new Schema({
  phrase: { type: Schema.Types.String, required: true },
  meaning: { type: Schema.Types.String, required: true },
  accent: { type: Schema.Types.ObjectId, ref: 'accents', required: true },
  category: { type: Schema.Types.ObjectId, ref: 'categories', required: true },
  createdAt: { type: Schema.Types.Date, default: new Date() },
});
