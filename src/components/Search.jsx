import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
const Search = () => {
  return (
    <div className="relative">
      <BsSearch className="absolute bottom-[5px] left-[5px] opacity-30" />
      <input
        className="border rounded pl-[24px] pr-1 h-7 focus:outline-none focus:w-[300px]"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
