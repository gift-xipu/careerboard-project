import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credetials" 
export const { handlers, signIn, signOut, auth } = NextAuth({
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
})
