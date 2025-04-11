import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/products";
import {NextResponse} from "next/server";

export async function POST(req) {
  const { name, price } = await req.json();
  await connectMongoDB();
  await Product.create({ name, price });
  return NextResponse.json({ message: "Product created successfully." }, {status: 201});
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}
