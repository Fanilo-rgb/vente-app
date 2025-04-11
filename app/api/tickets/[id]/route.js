import connectMongoDB from "@/libs/mongodb";
import Tickets from "@/models/tickets";
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
  const { id } = await params;
  await connectMongoDB();
  const ticket = await Tickets.findOne({ _id: id });
  return NextResponse.json({ ticket, status: 200 });
}
