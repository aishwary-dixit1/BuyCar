import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axios.js';
import CarCard from '../components/CarCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addCars } from '../redux/carSlice.js';

const HomePage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((store) => store.cars);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    make: '',
    fuel_type: '',
    seating_capacity: '',
    search: '',
    min_price: '',
    max_price: '',
    sort: '',
  });
  const [totalPages, setTotalPages] = useState(1);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(`/cars`, {
        params: {
          page,
          ...filters,
        },
      });

      dispatch(addCars(data.cars));
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error('Failed to fetch cars:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCars();
  }, [filters, page]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 space-y-6">
      <h1 className="text-3xl font-semibold text-center">Explore Available Cars</h1>

      <Filters filters={filters} setFilters={setFilters} setPage={setPage} />

      {loading ? (
        <div className="text-center py-12 text-lg flex justify-center items-center flex-col gap-1">
          <span className="loading loading-infinity loading-xl text-primary"></span>
          Loading cars...
        </div>
      ) : cars.length === 0 ? (
        <div className="text-center text-lg mt-10">No cars found for the selected filters.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}

      <Pagination page={page} setPage={setPage} total={totalPages} />
    </div>
  );
};

export default HomePage;
