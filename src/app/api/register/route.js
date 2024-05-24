import User from "@/app/models/User";
import mongoose from "mongoose";

export async function POST(req) {
  //   return Response.json("ok");

  const body = await req.json();

  mongoose.connect(process.env.MONGO_URL);

  const createdUser = await User.create(body);

  return Response.json(createdUser);
}
