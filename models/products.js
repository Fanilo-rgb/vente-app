import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  bv: Number,
  price: Number,
  quantity: Number,
  barCode: String,
  order: Number,
}, {
  timestamps: true,
})

if (mongoose.models.Product) {
  delete mongoose.models.Product;
}

const Product = mongoose.model("Product", productSchema);

export default Product;
