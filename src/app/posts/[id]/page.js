import { notFound } from "next/navigation"

async function getPost(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store"
    })

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const post = await getPost(id);

    return {
        title: post?.title || "Post",
        description: post?.content || "Post details"
    }
}

export default async function PostPage({ params }) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        notFound();
    }

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}