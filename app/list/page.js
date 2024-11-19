import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            {result.map((r, idx) => {
                return (
                    <div className="list-item" key = {idx}>
                        <Link prefetch={false} href={"/detail/" + r._id} className="link">
                            <h4>{r.title}</h4>
                        </Link>
                        <Link prefetch={false} href={"/edit/" + r._id} className="link">
                            수정페이지로
                        </Link>
                        <p>1월 1일</p>
                    </div>
                );
            })}
        </div>
    );
}
