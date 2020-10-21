import { Schema } from 'mongoose';

export const AccentSchema = new Schema({
  accent: { type: Schema.Types.String, required: true },
  createdAt: { type: Schema.Types.Date, default: new Date() },
});
