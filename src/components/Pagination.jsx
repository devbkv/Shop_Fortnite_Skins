// import React from 'react';

// eslint-disable-next-line react/prop-types
const Pagination = ({ setCurrentPage, pageNumbers, currentPage }) => {
  return (
    <div className="flex justify-center">
      <ul className="flex gap-3">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`bg-blue-500 text-white p-2 w-10 h-10 text-center boderStyle ${
                number === currentPage && 'bg-red-500 w-10 h-10 text-center boderStyle'
              }`}
              // className="w-10 h-10 text-center boderStyle"
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
