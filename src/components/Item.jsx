import { useInView } from 'react-intersection-observer';

const Item = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="boderStyle overflow-hidden">
      {inView ? (
        <img src={item?.displayAssets[0].full_background} alt={item?.displayName} />
      ) : (
        <svg>
          <rect width={500} height={500} fill="#f2f2f2" />
        </svg>
      )}
    </div>
  );
};

export default Item;
