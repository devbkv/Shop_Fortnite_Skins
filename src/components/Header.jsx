import React from 'react';
import CartItems from './CartItems';
const Header = () => {
  return (
    <div className="flex place-content-between pt-2 pb-2 p-4 boderStyle">
      <div>Shop Fortnite Skins</div>
      <CartItems />
    </div>
  );
};

export default Header;