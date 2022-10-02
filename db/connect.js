import mongoose from 'mongoose';

const connectDb = async (url) => mongoose.connect(url);

export default connectDb;
