import { connectDB } from "@/util/database";
import bcrypt from "bcrypt"

export default async function handler(request, response) {
    if (request.method == "POST") {
        const client = await connectDB;
        const db = client.db("forum");

        let hash = await bcrypt.hash(request.body.password, 10);
        request.body.password = hash;

        await db
            .collection("user_cred")
            .insertOne(request.body);

        return response.status(200).json("회원가입 성공!")
    }
}
