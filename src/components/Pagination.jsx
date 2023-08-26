import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../features/pagination/paginationSlice';
import { setCurrentItems } from '../features/items/itemsSlice';
import { useSelector } from 'react-redux';
// eslint-disable-next-line react/prop-types

const Pagination = () => {
  const dispatch = useDispatch();

  // Получаю стейты:
  const items = useSelector((state) => state.items.items);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  console.log('Выбрал страницу:', currentPage);

  // Логика пагинации
  const itemsPerPage = 16;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // При первой перерисовке получать айтемы
  useEffect(() => {
    dispatch(setCurrentItems(currentItems));
    console.log('currentItems_firstRender:', currentItems);
  }, []);

  // Передача currentItems
  // Обновление состояния currentItems при изменении currentPage

  useEffect(() => {
    // Передача currentItems
    dispatch(setCurrentItems(currentItems));
    console.log('currentItems_pagin:', currentItems);
  }, [currentPage, items]);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
    console.log('totalPages', totalPages);
  }

  return (
    <div className="flex justify-center">
      <ul className="flex gap-3 flex-wrap">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`bg-blue-500 text-white p-2 w-10 h-10 text-center boderStyle ${
                number === currentPage && 'bg-red-500 w-10 h-10 text-center boderStyle'
              }`}
              onClick={() => {
                dispatch(setCurrentPage(number));
              }}
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
