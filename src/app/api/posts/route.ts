import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("userName");

  try {
    await connect();

    if (!username) {
      const posts = await Post.find();
      return new NextResponse(JSON.stringify(posts), { status: 200 });
    }

    const posts = await Post.find({ userName: username });
    return new NextResponse(JSON.stringify(posts), { status: 201 });
  } catch (error) {
    return new NextResponse(`Error in responce of DB, ${error}`);
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error , ${err}`, { status: 500 });
  }
};
