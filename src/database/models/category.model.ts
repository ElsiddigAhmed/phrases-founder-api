import { Schema } from 'mongoose';

export const CategorySchema = new Schema({
  category: { type: Schema.Types.String, required: true },
  createdAt: { type: Schema.Types.Date, default: new Date() },
});
