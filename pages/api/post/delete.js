import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    if (request.method == "DELETE") {
        try {
            const client = await connectDB;
            const db = client.db("forum");
            let result = await db
                .collection("post")
                .deleteOne({ _id: new ObjectId(request.body) });

            if (result.deleteCount == 0) {
                return response.status(500).json("삭제 싪패");
            }
            return response.status(200).json("삭제 완료");
        } catch (error) {
            console.log(error);
        }
    }
}
