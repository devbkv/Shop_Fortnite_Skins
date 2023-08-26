import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <div className="boderStyle overflow-hidden bg-cover">
    <ContentLoader
      speed={2}
      width={510}
      height={310}
      viewBox="0 0 510 310"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="510" height="310" />
    </ContentLoader>
  </div>
);

export default Skeleton;
