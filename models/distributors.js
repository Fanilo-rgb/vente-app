import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: String,
  surname: String,
  number_card: String,
})

const distributorSchema = new Schema({
  name: String,
  surname: String,
  number_card: String,
  gender: String,
  nationality: String,
  CIN: String,
  phone: String,
  address: String,
  postal_code: Number,
  sponsor: schema,
  placement: schema,
}, {
  timestamps: true
})

const Distributor = mongoose.models.Distributor || mongoose.model("Distributor", distributorSchema);

export default Distributor;
