import { generateToken } from '@/lib/jwt';
import User, { IUser } from '@/models/User';
import bcrypt from 'bcryptjs';

class AuthService {
  async signUp(
    name: string,
    email: string,
    password: string,
  ): Promise<{ user: IUser; token: string }> {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = generateToken({ id: newUser._id, email: newUser.email });
    return { user: newUser, token };
  }

  async login(email: string, password: string): Promise<{ user: IUser; token: string }> {
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken({ id: user._id, email: user.email });
    return { user, token };
  }
}

export default new AuthService();
