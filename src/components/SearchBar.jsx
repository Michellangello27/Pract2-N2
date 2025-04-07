import React from 'react';

export default function SearchBar({ onSearch }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Buscando..."
          onKeyDown={handleKeyDown}
          className="w-full border border-gray-300 rounded px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
          🔍
        </button>
      </div>
    </div>
  );
}
