const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  genres: {
    type: [String],
    required: true
  },
  runtime: {
    type: Number,
    required: true
  },
  rated: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date // ISO date format
  },
  directors: {
    type: [String],
    required: true
  },
  cast: {
    type: [String],
    required: true
  },
  language: {
    type: String,
    default: 'English'
  },
  country: {
    type: String,
    default: 'USA'
  },
  description: {
    type: String,
    trim: true
  },
  ratings: {
    imdb: {
      type: Number,
      min: 0,
      max: 10
    },
    rottenTomatoes: {
      type: Number,
      min: 0,
      max: 100
    }
  },
  type: {
    type: String,
    enum: ['movie', 'series', 'documentary'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
