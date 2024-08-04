import NextAuth from "next-auth/next";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        Google({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
    ],
};

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};