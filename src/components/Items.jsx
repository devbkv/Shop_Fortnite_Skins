import { useEffect, useState } from 'react';
import Item from './Item';
import axios from 'axios';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../features/items/itemsSlice';

const Items = () => {
  const currentItems = useSelector((state) => state.items.currentItems);
  const items = useSelector((state) => state.items.items);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  console.log('currentItems:', currentItems);

  // Запросы к API Для получения items
  useEffect(() => {
    fetchItems();
  }, []);

  // async function fetchItems() {
  //   const response = await axios.get(`${import.meta.env.VITE_API_URL}/v2/shop`, {
  //     params: { lang: 'ru' },
  //     headers: { Authorization: import.meta.env.VITE_API_KEY },
  //   });

  //   dispatch(setItems(response.data.shop));
  // }

  async function fetchItems() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/v2/shop`, {
        params: { lang: 'ru' },
        headers: { Authorization: import.meta.env.VITE_API_KEY },
      });

      dispatch(setItems(response.data.shop));
      // console.log('Всего айтемов:', response.data);
      setLoading(false); // Устанавливаем состояние загрузки в false после успешного запроса
    } catch (error) {
      console.error(error);
      setLoading(false); // Устанавливаем состояние загрузки в false в случае ошибки
    }
  }

  if (loading) {
    return <div>Загрузка...</div>; // Отображаем загрузочный индикатор, пока загружаются данные
  }

  const foundItems = items.filter((item) =>
    item.displayName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  console.log('searchQuery:', searchQuery);
  console.log('searchItems:', !foundItems);

  return (
    <div>
      {searchQuery && foundItems.length == 0 && (
        <div className="text-2xl font-extrabold flex justify-center">Ничего не найдено</div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
        {searchQuery
          ? foundItems.map((item) => <Item item={item} key={item.offerId} />)
          : currentItems.map((item) => <Item item={item} key={item.offerId} />)}
      </div>
      {searchQuery ? '' : <Pagination />}
    </div>
  );
};

export default Items;
