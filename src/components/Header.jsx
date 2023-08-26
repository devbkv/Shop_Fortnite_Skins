// import React from 'react';

import CartItems from './CartItems';
const Header = () => {
  return (
    <div className="flex place-content-between pt-2 pb-2 p-4 boderStyle ">
      <div className="text-xl">Fortnite Skins Shop</div>
      <CartItems />
    </div>
  );
};

export default Header;
