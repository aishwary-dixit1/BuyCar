import React from 'react';

const Filters = ({ filters, setFilters, setPage }) => {
  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setPage(1);
  };

  const handleClear = () => {
    setFilters({
      make: '',
      fuel_type: '',
      seating_capacity: '',
      search: '',
      min_price: '',
      max_price: '',
      sort: '',
    });
    setPage(1);
  };

  return (
    <div className="bg-base-100 rounded-xl p-4 flex flex-wrap gap-4 justify-between items-center border border-base-300">

      <input
        type="text"
        name="search"
        placeholder="Search by brand or model"
        value={filters.search}
        onChange={handleChange}
        className="input input-bordered w-full md:max-w-xs"
      />

      <div className="flex flex-wrap gap-4 justify-between w-full md:w-auto">
        <select
          name="make"
          value={filters.make}
          onChange={handleChange}
          className="select select-bordered w-full md:w-40"
        >
          <option value="">All Brands</option>
          <option value="Toyota">Toyota</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Honda">Honda</option>
          <option value="Mahindra">Mahindra</option>
        </select>

        <select
          name="fuel_type"
          value={filters.fuel_type}
          onChange={handleChange}
          className="select select-bordered w-full md:w-40"
        >
          <option value="">All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>

        <select
          name="seating_capacity"
          value={filters.seating_capacity}
          onChange={handleChange}
          className="select select-bordered w-full md:w-40"
        >
          <option value="">All Seating</option>
          <option value="4">4 Seater</option>
          <option value="5">5 Seater</option>
          <option value="6">6 Seater</option>
          <option value="7">7 Seater</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="number"
          name="min_price"
          placeholder="Min ₹"
          value={filters.min_price}
          onChange={handleChange}
          className="input input-sm input-bordered w-24"
        />
        <span className="text-sm font-medium text-gray-500">to</span>
        <input
          type="number"
          name="max_price"
          placeholder="Max ₹"
          value={filters.max_price}
          onChange={handleChange}
          className="input input-sm input-bordered w-24"
        />
      </div>

      <select
        name="sort"
        value={filters.sort}
        onChange={handleChange}
        className="select select-bordered w-full md:w-44"
      >
        <option value="">Sort by</option>
        <option value="low_to_high">Price: Low to High</option>
        <option value="high_to_low">Price: High to Low</option>
      </select>

      <button
        onClick={handleClear}
        className="btn btn-outline btn-sm mt-2 md:mt-0"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
