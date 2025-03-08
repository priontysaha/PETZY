import mongoose from "mongoose";

const customersSchema = new mongoose.Schema({
  cname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

const Customers = mongoose.model("customers", customersSchema);
export default Customers;
