import { notFound } from "next/navigation";
import { posts } from "@/app/api/posts/route";

async function getPost(id) {
  const post = posts.find((elem) => elem.id === +id);
  return post || null;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post?.title || "Post",
    description: post?.content || "Post details"
  };
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
  );
}