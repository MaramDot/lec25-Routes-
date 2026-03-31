import Link from "next/link";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store"
  });

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container">
      <h1>Blog Posts</h1>

      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>

          <p>{post.content.slice(0, 50)}...</p>

          <Link href={`/posts/${post.id}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}