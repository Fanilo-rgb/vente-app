import mongoose, { Schema } from "mongoose";

const distributorSchema = new Schema({
  name: String,
  number_card: String,
}, {
  timestamps: true
})

const Distributor = mongoose.models.Distributor || mongoose.model("Distributor", distributorSchema);

export default Distributor;
