import React from 'react';

import { useInView } from 'react-intersection-observer';
import Skeleton from './Skeleton';

const Item = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const idItem = () => {
    console.log('idItem:', item?.offerId);
  };

  return (
    <div ref={ref} className="boderStyle overflow-hidden">
      <div className={`group ${inView ? '' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative">
          <img src={item?.displayAssets[0].background} alt={item?.displayName} />
          <div className="absolute flex flex-col content-end bottom-0 left-0 right-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="p-2">
              {item?.displayAssets.length > 1 ? (
                <div className="w-10 h-10 flex gap-1">
                  {item?.displayAssets.map((asset) => (
                    <img src={asset?.background} alt={item?.displayName} key={asset?.background} />
                  ))}
                </div>
              ) : (
                ''
              )}

              <p className="py-1">{item?.displayDescription}</p>
              <p>Тип: {item?.displayType}</p>
              <div className="flex place-content-between place-content-center items-end">
                <p>
                  Цена: <span className="font-bold">{item?.price.regularPrice}</span> v-baks
                </p>
                <button
                  className="button cursor-pointer bg-orange-500 text-white p-1 px-2 rounded hover:bg-orange-600"
                  onClick={idItem}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!inView && <Skeleton item={item} />}
    </div>
  );
};

export default Item;
