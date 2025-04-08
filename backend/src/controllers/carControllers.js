import Car from "../models/car.model.js";

export const getCars = async (req, res) => {
  const { page = 1, make, fuel_type, seating_capacity, search, min_price, max_price, sort } = req.query;

  const query = {};
  if (make) query.make = make;
  if (fuel_type) query.fuel_type = fuel_type;
  if (seating_capacity) query.seating_capacity = Number(seating_capacity);
  if (search) {
    query.$or = [
      { make: { $regex: search, $options: 'i' } },
      { model: { $regex: search, $options: 'i' } }
    ];
  }
  if (min_price) query.price = { ...query.price, $gte: Number(min_price) };
  if (max_price) query.price = { ...query.price, $lte: Number(max_price) };

  const limit = 10;
  const skip = (page - 1) * limit;

  let sortOption = {};
  if (sort === 'low_to_high') sortOption.price = 1;
  if (sort === 'high_to_low') sortOption.price = -1;

  try {
    const cars = await Car.find(query).sort(sortOption).skip(skip).limit(limit);
    const total = await Car.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.json({ cars, totalPages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
};




export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch car" });
  }
};

export const createCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    const saved = await car.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Failed to create car" });
  }
};
