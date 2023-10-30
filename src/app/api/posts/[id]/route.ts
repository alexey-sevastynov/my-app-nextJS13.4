import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: any) => {
  const { id } = params;
  try {
    await connect();
    console.log(id);
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(`Error in responce of DB, ${error}`);
    return new NextResponse(`Error in responce of DB, ${error}`);
  }
};
