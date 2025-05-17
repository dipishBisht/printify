import bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 12);
}

export async function comparePasswords(inputPassword: string, storedHash: string) {
  return await bcrypt.compare(inputPassword, storedHash);
}
