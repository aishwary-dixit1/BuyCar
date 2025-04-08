import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow mt-16 mb-16 px-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Body;
