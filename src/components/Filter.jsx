import React from 'react';

const Filter = () => {
  return (
    <div className="flex gap-3">
      <p>Фильтр</p>
      {/* Фильтр по цене */}
      <div className="flex gap-1">
        <input
          className="border rounded w-20 pl-[4px] pr-1 h-7 focus:outline-none"
          type="number"
          placeholder="min"
        />
        <input
          className="border rounded w-20 pl-[4px] pr-1 h-7 focus:outline-none"
          type="number"
          placeholder="max"
        />
      </div>
      {/* Фильтр по типу */}
      {/* selectComponent */}
      {/* Фильтр по rarity (редкость) */}
    </div>
  );
};

export default Filter;
