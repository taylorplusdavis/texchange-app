import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Lets the Google servers know from where the user is logging in
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.GOOGLE_CLIENT_SECRET,
});
