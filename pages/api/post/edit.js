import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    if (request.method == "POST") {
        let editBody = { title : request.body.title, content : request.body.content}

        try {
            const client = await connectDB;
            const db = client.db("forum");
            let result = await db
                .collection("post")
                .updateOne({ _id: new ObjectId(request.body._id) }, { $set: editBody });
            return response.status(200).redirect("/list");
        } catch (error) {
            console.log(error);
        }
    }
}
