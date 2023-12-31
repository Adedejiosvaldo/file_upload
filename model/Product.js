import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "You need to input a name"],
  },
  price: {
    type: Number,
    required: [true, "You need to input a price"],
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("File", ProductSchema);
