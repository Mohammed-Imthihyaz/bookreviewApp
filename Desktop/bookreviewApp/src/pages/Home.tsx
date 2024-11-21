import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BookCard from '../components/BookCard';
import { Book } from 'lucide-react';

export default function Home() {
  const { featured } = useSelector((state: RootState) => state.books);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-primary-900 sm:text-5xl md:text-6xl">
              Discover Your Next Great Read
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-primary-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore our vast collection of books across all genres. From bestsellers to hidden gems,
              find your perfect match today.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/books"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                >
                  Browse Books
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold text-primary-900">Featured Books</h2>
          <a
            href="/books"
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
          >
            View all
            <Book className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} featured />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
            <p className="mt-4 text-lg text-primary-200">
              Subscribe to our newsletter for the latest releases and exclusive offers.
            </p>
            <form className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
              <input
                type="email"
                className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}