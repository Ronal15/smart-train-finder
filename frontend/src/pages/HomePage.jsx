// frontend/src/pages/HomePage.jsx
import React from 'react';
import SearchForm from '../components/SearchForm';
import ResultsTable from '../components/ResultsTable';

const HomePage = () => {
  // Temporary mock data for demonstration
  const mockResults = [
    {
      id: 1,
      duration: "5h 10m",
      price: "€39",
      changes: 0,
      departure: "08:45",
      arrival: "13:55",
      carrier: "DB/NS"
    },
    {
      id: 2,
      duration: "6h 05m",
      price: "€29",
      changes: 1,
      departure: "07:00",
      arrival: "13:05",
      carrier: "IC + Sprinter"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🚄 Hamburg ⇄ Amsterdam: Smart Train Finder</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <SearchForm />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
        <ResultsTable results={mockResults} />
      </div>
    </div>
  );
};

export default HomePage;