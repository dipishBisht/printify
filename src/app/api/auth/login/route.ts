import dbConnect from '@/lib/mongoose';
import AuthService from '@/service/auth-service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    await dbConnect();
    const { user, token } = await AuthService.login(email, password);

    return NextResponse.json(
      {
        user: { id: user._id, name: user.name, email: user.email },
        token,
      },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Login failed' }, { status: 400 });
  }
}
