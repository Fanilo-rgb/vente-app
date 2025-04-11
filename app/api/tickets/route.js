import connectMongoDB from "@/libs/mongodb";
import Ticket from "@/models/tickets";
import {NextResponse} from "next/server";

export async function POST(req) {
  const { name, number_card, items } = await req.json();
  await connectMongoDB();
  await Ticket.create({ name, number_card, items });
  return NextResponse.json({ message: "Successfully created a Ticket"}, {status: 201});
}

export async function GET() {
  await connectMongoDB();
  const tickets = await Ticket.find();
  return NextResponse.json({ tickets });
}
