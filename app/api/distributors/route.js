import connectMongoDB from "@/libs/mongodb";
import Distributor from "@/models/distributors";
import {NextResponse} from "next/server";

export async function POST (req) {
  const { name, surname, number_card, gender, nationality, CIN, phone, address, postal_code, sponsor, placement } = await req.json();
  await connectMongoDB();
  await Distributor.create({ name, surname, number_card, gender, nationality, CIN, phone, address, postal_code, sponsor, placement });
  return NextResponse.json({ message: "Successfully created a Distributor" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const distributors = await Distributor.find();
  return NextResponse.json({ distributors });
}

export async function DELETE (req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Distributor.findByIdAndDelete(id);
  return NextResponse.json({ message: "Successfully deleted a Distributor" }, { status: 200 });
}
