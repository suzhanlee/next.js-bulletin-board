import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
    if (request.method == "DELETE") {
        try {
            const client = await connectDB;
            const db = client.db("forum");

            let session = getServerSession(request, response, authOptions);

            const findUser = await db
                .collection("post")
                .findOne({ _id: new ObjectId(request.body) });

            if (session.user.email === findUser.author) {
                let result = await db
                    .collection("post")
                    .deleteOne({ _id: new ObjectId(request.body) });

                if (result.deleteCount == 0) {
                    return response.status(500).json("삭제 싪패");
                }

                return response.status(200).json("삭제 완료");
            } else {
                return response.status(200).json("삭제 완료");
            }
        } catch (error) {
            console.log(error);
        }
    }
}
