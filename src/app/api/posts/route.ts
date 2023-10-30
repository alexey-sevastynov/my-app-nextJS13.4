import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connect();

    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
    // return post;
  } catch (error) {
    return new NextResponse(`Error in responce of DB, ${error}`);
  }
};
