import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Car, Wrench, Fuel } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../redux/wishlistSlice';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist);
  const isWished = wishlist.includes(car._id);

  // Navigate to car details when card is clicked
  const handleCardClick = () => {
    navigate(`/car/${car._id}`);
  };

  // Prevent navigation when clicking wishlist icon
  const handleWishlistClick = (e) => {
    e.stopPropagation(); // 🔥 Prevent card click from triggering
    dispatch(toggleWishlist(car._id));
  };

  return (
    <div
      className="bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{car.make} {car.model}</h3>
            <p className="text-sm text-gray-500">{car.year} • {car.fuel_type}</p>
          </div>
          <button
            className={`btn btn-sm btn-outline rounded-full border-none ${isWished ? 'bg-red-100' : ''}`}
            onClick={handleWishlistClick}
          >
            <Heart className={`w-5 h-5 ${isWished ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
          </button>
        </div>

        <p className="text-sm">
          <strong>₹{(car.price / 100000).toFixed(2)} Lakhs</strong> • {car.seating_capacity} Seater
        </p>

        <div className="text-xs text-gray-500 flex flex-wrap gap-4">
          <span className="flex items-center gap-1">
            <Car className="w-4 h-4 text-red-500" />
            {car.transmission}
          </span>
          <span className="flex items-center gap-1">
            <Fuel className="w-4 h-4 text-blue-500" />
            {car.fuel_tank_capacity}L Tank
          </span>
          <span className="flex items-center gap-1">
            <Wrench className="w-4 h-4" />
            {car.engine}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
