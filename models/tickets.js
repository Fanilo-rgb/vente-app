import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
})

const ticketSchema = new Schema({
  name: String,
  number_card: String,
  items: [ItemSchema],
}, { timestamps: true });

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
