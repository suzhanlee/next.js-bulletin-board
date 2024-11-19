import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "Ov23liWbMGC0B2cpOz23",
            clientSecret: "255254d6aaa308fc41f03db39ba27554252c24db",
        }),
    ],
    secret: "qwer1234",
};
export default NextAuth(authOptions);
