import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';

const genres = [
  { id: 'fiction', label: 'Fiction' },
  { id: 'non-fiction', label: 'Non-Fiction' },
  { id: 'mystery', label: 'Mystery' },
  { id: 'sci-fi', label: 'Science Fiction' },
];

const ratings = [
  { id: '4', label: '4+ Stars' },
  { id: '3', label: '3+ Stars' },
  { id: '2', label: '2+ Stars' },
];

export default function Books() {
  const { items, status } = useSelector((state: RootState) => state.books);
  const [search, setSearch] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

  const filteredBooks = items.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                         book.author.toLowerCase().includes(search.toLowerCase());
    const matchesRating = selectedRatings.length === 0 ||
                         selectedRatings.some(rating => book.rating >= parseInt(rating));
    // In a real app, books would have genre information
    return matchesSearch && matchesRating;
  });

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Filters */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Filters</h2>
            <FilterSection
              title="Genres"
              options={genres}
              selected={selectedGenres}
              onChange={setSelectedGenres}
            />
            <FilterSection
              title="Rating"
              options={ratings}
              selected={selectedRatings}
              onChange={setSelectedRatings}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}