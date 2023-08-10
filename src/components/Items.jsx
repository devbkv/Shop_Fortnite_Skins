import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);
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
  }

  // console.log('items.offerId', items.offerId);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <Item item={item} key={item.offerId} />
      ))}
    </div>
  );
};

export default Items;
