import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;