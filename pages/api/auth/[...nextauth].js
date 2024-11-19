import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { adapter } from "next/dist/server/web/adapter";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "Ov23liWbMGC0B2cpOz23",
            clientSecret: "255254d6aaa308fc41f03db39ba27554252c24db",
        }),
    ],
    secret: "qwer1234",
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);
