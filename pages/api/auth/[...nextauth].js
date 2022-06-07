import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "lib/prisma";
import nextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

export default nextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    })
  ],

  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 
  },

  debug: true,
  adapter: PrismaAdapter(prisma),

  callbacks: {
    session: async ({ session, user}) => {
      session.user.id = user.id;
      return Promise.resolve(session);
    }
  }
});