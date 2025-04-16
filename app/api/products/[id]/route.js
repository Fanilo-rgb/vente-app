import connectMongoDB from "@/libs/mongodb";
import Products from "@/models/products";
import {NextResponse} from "next/server";

export async function PUT(req, {params}) {
  const {id} = params;
  const { newName: name, newPrice: price, newQuantity: quantity } = await req.json();
  await connectMongoDB();
  await Products.findByIdAndUpdate(id, { name, price, quantity });
  return NextResponse.json({ message: "Successfully updated a Product" }, {status: 200});
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Products.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
