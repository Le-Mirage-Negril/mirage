import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import { compareSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";
import { cookies } from "next/headers";

const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        // find user in firebase???
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });
        if (user && user.password) {
          const isMatch = compareSync(credentials.password as string, user.password);
          if (isMatch) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              image: user.image,
              isAdmin: user.isAdmin,
            };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, user, trigger, token }: any) {
      session.user.id = token.sub;
      if (trigger === "update") {
        session.user.name = user.name;
        session.user.isAdmin = user.isAdmin;
      }
      console.log(session, token);
      return session;
    },
    async jwt({ token, user, trigger, session }: any) {
      if (user) {
        token.isAdmin = user?.isAdmin;
      }
      console.log(session, token);
      return token;
    },
    // authorized({ request, auth }: any) {
    //   // check for session cookie
    //   if (!request.cookies.get("session")) {
    //   }
    // },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
