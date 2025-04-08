import connectMongoDB from "@/libs/mongodb";
import {NextResponse} from "next/server";
import Distributor from "@/models/distributors";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newName: name, newNumber_card: number_card} = await req.json();
  await connectMongoDB();
  await Distributor.findByIdAndUpdate(id, { name, number_card });
  return NextResponse.json({ message: "Successfully updated a Distributor" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const distributor = await Distributor.findOne({ _id: id });
  return NextResponse.json({ distributor }, { status: 200 });
}
