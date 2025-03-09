import { type DefaultSession } from 'next-auth';

import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      address: string;
      role: 'ADMIN' | 'USER';
      id: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    idToken?: string;
    role?: 'ADMIN' | 'USER';
    sub: string;
  }
}
