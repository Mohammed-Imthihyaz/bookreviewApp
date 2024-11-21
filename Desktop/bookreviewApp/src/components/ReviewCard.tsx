import React from 'react';
import { Star, User } from 'lucide-react';

interface ReviewCardProps {
  author: string;
  rating: number;
  date: string;
  content: string;
}

export default function ReviewCard({ author, rating, date, content }: ReviewCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-2">
        <div className="bg-primary-100 rounded-full p-2">
          <User className="h-5 w-5 text-primary-600" />
        </div>
        <div className="ml-3">
          <p className="font-medium text-gray-900">{author}</p>
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}