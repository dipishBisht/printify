import connectDB from '@/lib/mongoose';
import Order from '@/models/Order';

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const newOrder = await Order.create({
    userId: body.userId,
    shopId: body.shopId,
    fileUrl: body.fileUrl,
    pickupTime: new Date(body.pickupTime),
    options: body.options,
  });

  return Response.json(newOrder);
}
