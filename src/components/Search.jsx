import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../features/search/searchSlice';

const Search = () => {
  const dispatch = useDispatch();

  // debounce function
  const [timeoutId, setTimeoutId] = React.useState(null);
  const handleChange = (e) => {
    clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery(e.target.value));
    }, 300);
    setTimeoutId(newTimeoutId);
    console.log('newTimeoutId:', newTimeoutId);
  };
  return (
    <div>
      <div className="relative">
        {/* Иконка поиска */}
        <BsSearch className="absolute bottom-[5px] left-[5px] opacity-30" />
        <input
          onChange={handleChange}
          className="border rounded pl-[24px] pr-1 h-7 focus:outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Search;
