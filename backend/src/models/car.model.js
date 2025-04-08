import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  mileage_city: { type: Number, required: true },
  mileage_highway: { type: Number, required: true },
  seating_capacity: { type: Number, required: true },
  price: { type: Number, required: true },
  fuel_type: { type: String, required: true },
  transmission: { type: String, required: true },
  fuel_tank_capacity: { type: Number, required: true },
  engine: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: "https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg" }
});

const Car = mongoose.model("Car", carSchema);

export default Car;
