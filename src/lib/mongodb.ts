// import mongoose from 'mongoose'

// const MONGODB_URI_LOCAL = process.env.MONGODB_URI_LOCAL!

// if (!MONGODB_URI_LOCAL) throw new Error("Please define MONGODB_URI_LOCAL")

// let cached = global.mongoose || { conn: null, promise: null }

// export async function connectDB() {
//     if (cached.conn) return cached.conn
//     if (!cached.promise) {
//         cached.promise = mongoose.connect(MONGODB_URI_LOCAL).then((mongoose) => mongoose)
//     }
//     cached.conn = await cached.promise
//     return cached.conn
// }

// export default clientPromise;
