import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Fuel, GaugeCircle, Users, Car, CalendarDays, Wrench } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../redux/wishlistSlice';
import axiosInstance from '../utils/axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const isWished = wishlist.includes(id);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data } = await axiosInstance.get(`/cars/${id}`);
        setCar(data);
      } catch (err) {
        console.error('Error fetching car details:', err);
      }
    };
    fetchCar();
  }, [id]);

  if (!car) {
    return (
      <div className="text-center py-12 text-lg flex justify-center items-center flex-col gap-1">
        <span className="loading loading-infinity loading-xl text-primary"></span>
        Loading car details...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src={car.image}
          alt={car.model}
          className="w-full rounded-2xl object-cover shadow-xl max-h-[500px]"
        />
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold">{car.make} {car.model}</h1>
            <p className="mt-2 text-lg text-gray-500">{car.description}</p>
          </div>
          <button
            onClick={() => dispatch(toggleWishlist(car._id))}
            className={`btn btn-md btn-outline rounded-full border-none ${isWished ? 'bg-red-100' : ''}`}
          >
            <Heart className={`w-8 h-8 ${isWished ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
          </button>
        </div>

        <div>
          <p className="text-3xl font-bold text-primary">₹{(car.price / 100000).toFixed(2)} Lakhs</p>
          <p className="text-md text-gray-500 flex items-center gap-2 mt-1">
            <CalendarDays className="w-5 h-5" /> Year: {car.year}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-base">
          <div className="flex items-center gap-3">
            <Fuel className="w-6 h-6 text-blue-500" />
            <div>
              <p className="font-semibold">Fuel Type</p>
              <p>{car.fuel_type}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <GaugeCircle className="w-6 h-6 text-green-500" />
            <div>
              <p className="font-semibold">Mileage</p>
              <p>{car.mileage_city}–{car.mileage_highway} km/l</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-purple-500" />
            <div>
              <p className="font-semibold">Seating</p>
              <p>{car.seating_capacity} Seater</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Car className="w-6 h-6 text-orange-500" />
            <div>
              <p className="font-semibold">Transmission</p>
              <p>{car.transmission}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Fuel className="w-6 h-6 text-amber-500" />
            <div>
              <p className="font-semibold">Fuel Tank</p>
              <p>{car.fuel_tank_capacity} L</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Wrench className="w-6 h-6 text-gray-500" />
            <div>
              <p className="font-semibold">Engine</p>
              <p>{car.engine}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
