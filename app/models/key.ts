import { Schema, model } from 'mongoose';

const keySchema = new Schema(
  {
    apiKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = model('Key', keySchema);
