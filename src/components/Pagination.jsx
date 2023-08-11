import React from 'react';

const Pagination = ({ setCurrentPage, pageNumbers }) => {
  console.log('pageNumbers:', pageNumbers);

  return (
    <div className="flex justify-center">
      <ul className="flex gap-3">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className="w-10 h-10 text-center boderStyle"
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
