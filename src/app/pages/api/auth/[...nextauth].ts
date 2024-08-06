import NextAuth from "next-auth/next";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { NextAuthOptions, SessionStrategy } from "next-auth";

export const authOptions = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        Google({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
        }),
    ],
    session: {
        strategy: 'jwt' as SessionStrategy,
    },
};

export default NextAuth(authOptions);

// export {handler as GET, handler as POST};