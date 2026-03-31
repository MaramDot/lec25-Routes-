"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                content
            })
        });

        if (res.ok) {
            router.push("/");
        }
    };

    return (
        <div className="container">
            <h1>Create New Post</h1>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>

                <textarea
                    placeholder="Enter content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}/>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}
export default page