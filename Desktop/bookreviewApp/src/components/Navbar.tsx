import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Search, User, ShoppingBag } from 'lucide-react';
import { RootState } from '../store/store';

export default function Navbar() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-serif font-bold text-primary-800">Bookstore</span>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link to="/books" className="text-primary-600 hover:text-primary-800 px-3 py-2">
                  Books
                </Link>
                <Link to="/categories" className="text-primary-600 hover:text-primary-800 px-3 py-2">
                  Categories
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary-600">
              <Search className="h-6 w-6" />
            </button>
            {isAuthenticated ? (
              <Link to="/profile" className="text-gray-600 hover:text-primary-600">
                <User className="h-6 w-6" />
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}