import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from '../components/CarCard';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const cars = useSelector((state) => state.cars);

  const wishlistedCars = cars.filter((car) => wishlist.includes(car._id));

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className='flex justify-center flex-row gap-3'>
        <Heart className='w-7 h-7 text-red-500 mt-1'/>
        <h2 className="text-2xl font-semibold mb-6"> My Wishlist</h2>
      </div>

      {wishlistedCars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistedCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-lg text-gray-600">You haven't added any cars to your wishlist yet.</p>
          <Link to="/" className="btn btn-primary mt-4">Browse Cars</Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
