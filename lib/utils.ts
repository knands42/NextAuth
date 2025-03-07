import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { randomBytes, pbkdf2Sync } from 'crypto';

type HashPasswordReturn = {
  salt: string;
  hash: string;
};

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

export const hashPassword = (
  password: string,
  salt: string = randomBytes(16).toString('hex')
): HashPasswordReturn => {
  const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
};
