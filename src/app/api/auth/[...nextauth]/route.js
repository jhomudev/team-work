import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'jsmith@gmail.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        const res = await axios.post('http://localhost:3000/api/auth/login', credentials)
        const auth = await res.data

        // If no error and we have user data, return it
        console.log(auth)
        if (auth.ok) return auth
        // Return null if user data could not be retrieved
        // throw auth
        return null
      }
    })
  ],
  // session: {
  //   strategy: 'jwt'
  // },
  callbacks: {
    async jwt ({ token, user }) {
      return { ...token, ...user }
    },
    async session ({ session, token }) {
      session.user = token
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
