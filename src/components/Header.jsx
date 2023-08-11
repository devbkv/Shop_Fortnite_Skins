import React from 'react';
import CartItems from './CartItems';
import Search from './Search';
const Header = () => {
  return (
    <div className="flex place-content-between pt-2 pb-2 p-4 boderStyle">
      <div>Shop Fortnite Skins</div>
      <Search />
      <CartItems />
    </div>
  );
};

export default Header;
