import React from 'react';

export default function CategoryButtons({ onCategoryClick }) {
  const tags = ["casas", "flowers", "beach", "dog", "sunset"];

  return (
    <div className="flex flex-col sm:flex-row justify-center sm:flex-wrap gap-2 sm:gap-3 mb-8">
      {tags.map((tag, i) => (
        <button
          key={i}
          value={tag}
          onClick={(e) => onCategoryClick(e.target.value)}
          className="bg-slate-900 text-white px-3 py-1 text-sm rounded hover:bg-slate-700 w-full sm:w-auto capitalize"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
