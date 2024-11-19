import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
    let session = getServerSession(request, response, authOptions);

    if (session) {
        request.body.author = session.user.email;
    }

    if (request.method == "POST") {
        if (request.body.title == "") {
            return response.status(500).json("제목을 적어주세요!");
        }

        try {
            const client = await connectDB;
            const db = client.db("forum");
            let result = await db.collection("post").insertOne(request.body);
            return response.status(200).redirect("/list");
        } catch (error) {
            console.log(error);
        }
    }
}
