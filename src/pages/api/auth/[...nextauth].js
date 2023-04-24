import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if(!credentials || !credentials.email || !credentials.password) return null;

        const prisma = new PrismaClient();
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        }).catch((error) => {
          console.log(error);
          return null;
        });

        if (!user) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) token.user = user;
      return token;
    },
    async session({session, token}) {
      if(token) session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  }
}

export default NextAuth(authOptions)