import NextAuth, { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  providers: [],

  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
};
export default NextAuth(authOptions);
