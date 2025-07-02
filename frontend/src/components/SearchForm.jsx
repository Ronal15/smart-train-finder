// frontend/src/components/SearchForm.jsx
import React, { useState } from 'react';

const SearchForm = () => {
  const [tripType, setTripType] = useState('one-way');
  const [departureDate, setDepartureDate] = useState('');
  const [overnightStays, setOvernightStays] = useState(0);
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', { tripType, departureDate, overnightStays, returnDate });
    // Will connect to backend later
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trip Type
          </label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="one-way">One-way</option>
            <option value="roundtrip">Roundtrip</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure Date
          </label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      {tripType === 'roundtrip' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Return Date or Overnight Stays
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                min="0"
                value={overnightStays}
                onChange={(e) => setOvernightStays(e.target.value)}
                placeholder="Overnight stays"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="self-center text-gray-500">OR</span>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                placeholder="Return date"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Search Trains
        </button>
      </div>
    </form>
  );
};

export default SearchForm;