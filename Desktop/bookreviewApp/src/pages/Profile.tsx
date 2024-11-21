import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { User, BookOpen, Heart, Settings } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';

export default function Profile() {
  const { currentUser } = useSelector((state: RootState) => state.user);

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Please sign in to view your profile</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-16 h-16 text-primary-600" />
                )}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{currentUser.name}</h2>
              <p className="text-gray-500">{currentUser.email}</p>
            </div>

            <div className="mt-6 space-y-2">
              <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                <BookOpen className="w-5 h-5 mr-3" />
                My Books
              </button>
              <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                <Heart className="w-5 h-5 mr-3" />
                Wishlist
              </button>
              <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-sm">
            {/* Reading Stats */}
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reading Stats</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">12</p>
                  <p className="text-sm text-gray-500">Books Read</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">4.5</p>
                  <p className="text-sm text-gray-500">Avg Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">8</p>
                  <p className="text-sm text-gray-500">Reviews</p>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Recent Reviews</h3>
              <div className="space-y-4">
                <ReviewCard
                  author={currentUser.name}
                  rating={5}
                  date="March 5, 2024"
                  content="One of the best books I've read this year. The author's writing style is captivating."
                />
                <ReviewCard
                  author={currentUser.name}
                  rating={4}
                  date="March 1, 2024"
                  content="A thought-provoking read that kept me engaged throughout. Highly recommended."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}