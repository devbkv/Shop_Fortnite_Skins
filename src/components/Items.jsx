import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';
import Pagination from './Pagination';

const Items = () => {
  const [items, setItems] = useState([]);

  // Логика пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  console.log('currentItems:', currentItems);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
    console.log('totalPages', totalPages);
  }
  // const [imgItem, setImgItem] = useState('');

  // const papamsFetch = [offerId, displayName, price.finalPrice];
  // console.log(items);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const response = await axios.get('https://fortniteapi.io/v2/shop?lang=en', {
      headers: { Authorization: '5d439298-065205d6-fc55387a-8e177815' },
    });
    // console.log(response.data.shop[2].offerId);
    setItems(response.data.shop);
    console.log('Всего айтемов:', response.data);
  }

  // console.log('items.offerId', items.offerId);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {currentItems.map((item) => (
          <Item item={item} key={item.offerId} />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} />
    </div>
  );
};

export default Items;
