import connectMongoDB from "@/libs/mongodb";
import {NextResponse} from "next/server";
import Distributor from "@/models/distributors";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newName: name, newSurname: surname, newPhone: phone, newAddress: address, newPostal_code: postal_code } = await req.json();
  await connectMongoDB();
  await Distributor.findByIdAndUpdate(id, { name, surname, phone, address, postal_code });
  return NextResponse.json({ message: "Successfully updated a Distributor" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const distributor = await Distributor.findOne({ _id: id });
  return NextResponse.json({ distributor }, { status: 200 });
}
