import { useEffect, useState } from 'react';
import Item from './Item';
import axios from 'axios';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentItems, setItems } from '../features/items/itemsSlice';
import Skeleton from './Skeleton';

const Items = () => {
  const currentItems = useSelector((state) => state.items.currentItems);
  const items = useSelector((state) => state.items.items);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  // Запросы к API Для получения items
  useEffect(() => {
    fetchItems();
    console.log('currentItems_fetchItems:', currentItems);
  }, []);

  async function fetchItems() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/v2/shop`, {
        params: { lang: 'ru' },
        headers: { Authorization: import.meta.env.VITE_API_KEY },
      });

      dispatch(setItems(response.data.shop));
      console.log('Всего айтемов:', response.data);
      setLoading(false); // Устанавливаем состояние загрузки в false после успешного запроса
    } catch (error) {
      console.error(error);
      setLoading(false); // Устанавливаем состояние загрузки в false в случае ошибки
    }
  }
  console.log('loading?:', loading);
  console.log('Выбранно айтемов:', currentItems);
  // if (loading) {
  //   return <div>Идёт загрузка данных...</div>;
  // }
  // if (loading) {
  //   return [...new Array(24)].map((_, id) => <Skeleton key={id} />);
  // }

  const foundItems = items.filter((item) =>
    item.displayName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {searchQuery && foundItems.length == 0 && (
        <div className="text-2xl font-extrabold flex justify-center">Ничего не найдено</div>
      )}
      {/* Основная сетка всех айтемов */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
        {loading
          ? [...new Array(16)].map((_, id) => <Skeleton key={id} />)
          : searchQuery
          ? foundItems.map((item) => <Item item={item} key={item.offerId} />)
          : currentItems.map((item) => <Item item={item} key={item.offerId} />)}
        {/* {searchQuery
          ? foundItems.map((item) => <Item item={item} key={item.offerId} />)
          : currentItems.map((item) => <Item item={item} key={item.offerId} />)} */}
      </div>
      {searchQuery && !loading ? '' : <Pagination />}
    </div>
  );
};

export default Items;
