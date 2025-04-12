import { Schema, Document, models, model } from 'mongoose';

export interface IOrder extends Document {
  userId: string;
  shopId: string;
  fileUrl: string;
  pickupTime: Date;
  status: 'pending' | 'printed' | 'delivered';
  options: {
    color: boolean;
    copies: number;
    doubleSided: boolean;
    paperSize: string;
  };
}

const OrderSchema = new Schema<IOrder>(
  {
    userId: { type: String, required: true },
    shopId: { type: String, required: true },
    fileUrl: { type: String, required: true },
    pickupTime: { type: Date, required: true },
    status: {
      type: String,
      enum: ['pending', 'printed', 'delivered'],
      default: 'pending',
    },
    options: {
      color: Boolean,
      copies: Number,
      doubleSided: Boolean,
      paperSize: String,
    },
  },
  { timestamps: true },
);

// Prevent model overwrite issue in Next.js dev mode
const Order = models.Order || model<IOrder>('Order', OrderSchema);

export default Order;
