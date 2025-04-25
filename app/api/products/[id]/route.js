import connectMongoDB from "@/libs/mongodb";
import Products from "@/models/products";
import {NextResponse} from "next/server";

export async function PUT(req, {params}) {
  const { id } = await params;
  const { newName: name, newBv: bv, newPrice: price, newQuantity: quantity, newBarCode: barCode, newOrder: order } = await req.json();
  await connectMongoDB();
  await Products.findByIdAndUpdate(id, { name, bv, price, quantity, barCode, order });
  return NextResponse.json({ message: "Successfully updated a Product" }, {status: 200});
}

export async function GET(req, { params }) {
  const { id } = await params;
  await connectMongoDB();
  const product = await Products.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
