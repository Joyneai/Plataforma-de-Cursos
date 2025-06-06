import { PrismaAdapter } from "@auth/prisma-adapter"
import { getServerSession } from "next-auth"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { db } from "./db"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "database"
  },
  pages: {
    signIn: "/login"
  }
}

export function getAuthSession() {
  return getServerSession(authOptions)
}
