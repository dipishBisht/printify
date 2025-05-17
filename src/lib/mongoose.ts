/* eslint-disable */
import mongoose from 'mongoose';

const MONGODB_URI_LOCAL = process.env.MONGODB_URI_LOCAL as string;
const MONGODB_URI = process.env.MONGODB_URI as string;

const isProduction = process.env.NODE_ENV === 'production';
const URI = isProduction ? MONGODB_URI : MONGODB_URI_LOCAL;

if (!URI) {
  throw new Error('MongoDB URI is not defined');
}

// Cache the connection
let cached = (global as any).mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

(global as any).mongoose = cached;

export default dbConnect;
