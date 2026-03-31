import { NextResponse } from "next/server"
export const posts=[
    {   id: 1,
        title: "Getting Started with Next.js",
        content: "Next.js is a React framework that helps us build full-stack applications using the App Router."
    },
    {   id: 2,
        title: "Understanding Server Side Rendering",
        content: "SSR means the page is rendered on the server before it is sent to the browser."
    },
    {
        id: 3,
        title: "Dynamic Routing in Next.js",
        content: "Dynamic routes allow us to create pages based on changing values like post ids."
    }   
]
export const GET=async()=>{
    return NextResponse.json(posts);
}
export const POST=async(req)=>{
    const body = await req.json();
    const newPost={
        id: posts.length+1,
        title: body.title,
        content: body.content
    }
    posts.push(newPost);
    return NextResponse.json(newPost, {status:201})
}