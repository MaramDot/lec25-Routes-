import { NextResponse } from "next/server";
import { posts } from "../route";

export const GET = async (req, props) => {
    const { id } = await props.params;

    const post = posts.find((elem) => {
        return elem.id === +id;
    });

    if (!post) {
        return NextResponse.json(
            { message: "Post not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(post, { status: 200 });
};