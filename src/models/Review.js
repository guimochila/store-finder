import {Schema, model} from 'mongoose';

const reviewSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author!',
  },
  store: {
    type: Schema.ObjectId,
    ref: 'Store',
    required: 'You must supply an store!',
  },
  text: {
    type: String,
    required: 'Your review must have text!',
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

function autoPopulate(next) {
  this.populate('author');
  next();
}

reviewSchema.pre('find', autoPopulate);
reviewSchema.pre('findOne', autoPopulate);

export default model('Review', reviewSchema);
