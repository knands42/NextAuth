import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as bcrypt from 'bcryptjs';

const PASSWORD_SALT = 10;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
}

export const hashPassword = async (
  password: string,
  salt: number = PASSWORD_SALT
): Promise<string> => {
  return bcrypt.hash(password, salt);
};

export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export { PASSWORD_SALT };
