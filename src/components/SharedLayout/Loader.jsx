import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="120"
        color="#ccd0cf"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
