import mongoose from 'mongoose';

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owners: {
    type: Array,
    required: true,
  },
});

export default AnimalSchema;
