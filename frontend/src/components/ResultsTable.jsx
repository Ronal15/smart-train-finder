// frontend/src/components/ResultsTable.jsx
import React from 'react';

const ResultsTable = ({ results }) => {
  if (!results || results.length === 0) {
    return <p className="text-gray-500">No results found. Please try a different search.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Option
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Duration
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Changes
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Departure
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Arrival
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Train Type/Carrier
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {results.map((train) => (
            <tr key={train.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #{train.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {train.duration}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                {train.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {train.changes} {train.changes === 1 ? 'change' : 'changes'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {train.departure}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {train.arrival}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {train.carrier}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;