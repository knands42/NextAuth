'use server';

import { getUserByEmail } from '@/data/user';
import { prisma } from '@/lib/db';
import { hashPassword } from '@/lib/utils';
import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

const SALT = '123456';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid credentials!' };
  }

  const { email, name, password } = validatedFields.data;
  const { hash } = hashPassword(password, SALT);

  const existingUser = await getUserByEmail(email);
  if (existingUser) return { error: 'User already exists!' };

  await prisma.user.create({
    data: {
      email,
      name,
      password: hash,
    },
  });

  // TODO: Send verification token email

  return { success: 'User registered successfully!' };
};
