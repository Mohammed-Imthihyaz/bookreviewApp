import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Star, Heart, Share2 } from 'lucide-react';
import { RootState } from '../store/store';
import ReviewCard from '../components/ReviewCard';

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const { items } = useSelector((state: RootState) => state.books);
  const book = items.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Book not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Book Image */}
        <div className="lg:col-span-1">
          <div className="aspect-w-2 aspect-h-3 rounded-lg overflow-hidden">
            <img
              src={book.cover}
              alt={book.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Book Details */}
        <div className="lg:col-span-2 mt-8 lg:mt-0">
          <h1 className="text-3xl font-serif font-bold text-gray-900">{book.title}</h1>
          <p className="mt-2 text-xl text-gray-600">{book.author}</p>
          
          <div className="flex items-center mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">{book.rating} out of 5</span>
          </div>

          <div className="mt-6">
            <span className="text-3xl font-bold text-primary-600">${book.price.toFixed(2)}</span>
          </div>

          <div className="mt-8 space-y-4">
            <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Add to Cart
            </button>
            <div className="flex space-x-4">
              <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                <Heart className="h-5 w-5" />
                <span>Save</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>

          {/* Reviews Section */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Customer Reviews</h2>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Write a Review
              </button>
            </div>
            <div className="space-y-4">
              <ReviewCard
                author="John Doe"
                rating={5}
                date="March 1, 2024"
                content="Absolutely loved this book! The character development was outstanding and the plot kept me engaged throughout."
              />
              <ReviewCard
                author="Jane Smith"
                rating={4}
                date="February 28, 2024"
                content="Great read with beautiful prose. The ending felt a bit rushed, but overall a very enjoyable experience."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}