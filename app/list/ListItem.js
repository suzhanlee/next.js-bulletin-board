"use client"

import Link from "next/link";

export default function ListItem(props) {
    return (
        <div>
            {props.result.map((r, idx) => {
                return (
                    <div className="list-item" key={idx}>
                        <Link
                            prefetch={false}
                            href={"/detail/" + r._id}
                            className="link"
                        >
                            <h4>{r.title}</h4>
                        </Link>
                        <Link
                            prefetch={false}
                            href={"/edit/" + r._id}
                            className="link"
                        >수정페이지로
                        </Link>
                        <span onClick={(e) => {
                            fetch("/api/post/delete", {
                                method : "DELETE",
                                body : r._id
                            }).then((r) => {
                                if (r.status == 200) {
                                   return r.json()
                                } else {
                                   return r.json()
                                }
                            }).then((r) => { 
                                e.target.parentElement.style.opacity = 0;
                                setTimeout(() => {
                                    e.target.parentElement.style.display = "none";
                                }, 1000)
                            }).catch((error) => {
                                console.log("internet connect error")
                                console.log(error)
                            })
                        }}>삭제</span>
                        <p>1월 1일</p>
                    </div>
                );
            })}
        </div>
    );
}
