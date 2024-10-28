import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credetials"
import {db, accounts, sessions, users, verificationTokens} from "@/utils/db/schema.ts"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapters: DrizzleAdpater(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  })
  providers: [
    Credentials({
      credetials: {
        email: {label: "Email"},
        password: {label: "Password", type: "Password"}
      },
      async authorize({request}){
        const response = await fetch(response)
        if (!response.ok) return null
      return (await response.json()) ?? null
      }
    })
  ],
  pages: {
    signIn: '/login',
    signOut: '/signOut',
    newUser: '/dashboard/newUser'
  }
})
