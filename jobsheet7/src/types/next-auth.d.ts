import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Meng-extend tipe Session bawaan NextAuth
   */
  interface Session {
    user: {
      fullname?: string | null;
      role?: string | null;
      type?: string | null;
    } & DefaultSession["user"];
  }

  /**
   * Meng-extend tipe User bawaan NextAuth
   */
  interface User {
    fullname?: string | null;
    role?: string | null;
    type?: string | null;
  }
}

declare module "next-auth/jwt" {
  /**
   * Meng-extend tipe JWT bawaan NextAuth
   */
  interface JWT {
    fullname?: string | null;
    role?: string | null;
    type?: string | null;
  }
}