import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Book } from '../store/slices/booksSlice';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export default function BookCard({ book, featured = false }: BookCardProps) {
  return (
    <Link to={`/books/${book.id}`} className="group">
      <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ${featured ? 'hover:scale-105' : 'hover:scale-102'}`}>
        <div className="aspect-w-2 aspect-h-3 relative">
          <img
            src={book.cover}
            alt={book.title}
            className="object-cover w-full h-full"
          />
          {featured && (
            <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-sm">
              Featured
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 line-clamp-1">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{book.author}</p>
          <div className="flex items-center mt-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
            <span className="ml-auto font-semibold text-primary-600">
              ${book.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}