import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://rootuser:rootpass@localhost:27017/qravedb?authSource=admin');
    console.log('+++++++++++++++++++ MongoDB connected successfully +++++++++++++++++++');
  } catch (err) {
    console.error('MongoDB connection failed', err);
  }
};

export default connectDB;
