import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Heart } from 'lucide-react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistPage, setWishlistPage] = useState(false);

  return (
    <>
      <div className="navbar bg-gray-900 text-primary-content fixed top-0 left-0 w-full z-50 px-4">
        <div className="flex-1">
        <Link to={"/"} onClick={() => setWishlistPage(false)} className="text-3xl font-semibold text-orange-500 tracking-wide px-4 py-2 rounded-md bg-transparent border-none hover:bg-transparent hover:text-orange-500 hover:shadow-none">
          BuyCar
        </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          { !wishlistPage &&
            <Link to={"/wishlist"} onClick={() => setWishlistPage(!wishlistPage)} className="rounded-full border border-red-500 text-red-500 p-2 hover:bg-red-100 transition-colors duration-200">
              <Heart className="w-5 h-5" />
            </Link>
          }

        </div>

        <div className="md:hidden">
          <button className="btn btn-square btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-primary text-primary-content shadow-md z-40 px-4 py-3 flex flex-row justify-center items-center gap-3">
          <ThemeToggle />
          { !wishlistPage &&
            <Link to={"/wishlist"} onClick={() => setWishlistPage(!wishlistPage)} className="rounded-full border border-red-500 text-red-500 p-2 hover:bg-red-100 transition-colors duration-200">
              <Heart className="w-5 h-5" />
            </Link>
          }
        </div>
      )}
    </>
  );
};

export default Navbar;
