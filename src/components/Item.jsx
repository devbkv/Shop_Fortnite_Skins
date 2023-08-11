import React from 'react';

import '../App.css';

const Item = ({ item }) => {
  // console.log('Comp_Item', item);
  // console.log('item.offerId', item.mainId);

  // const papamsFetch = [offerId, displayName, price.finalPrice];

  return (
    <div className="boderStyle overflow-hidden">
      <img src={item?.displayAssets[0].full_background} alt={item?.displayName} />

      {/* <div className="flex place-content-between p-2">
        <div>Add to Cart</div>
        <div>Price: {item?.price.finalPrice}</div>
      </div> */}
    </div>
  );
};

export default Item;
