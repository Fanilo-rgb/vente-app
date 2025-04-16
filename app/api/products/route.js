import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/products";
import {NextResponse} from "next/server";

export async function POST(req) {
  const { name, price, quantity } = await req.json();
  await connectMongoDB();
  await Product.create({ name, price, quantity });
  return NextResponse.json({ message: "Product created successfully." }, {status: 201});
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find().sort({ name: 1 });
  return NextResponse.json({ products });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({message: "Product deleted",status: 200});
}
