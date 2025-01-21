import React from 'react';
import Banner from '../Header/Banner';
import Statistical from '../Main/StatisticalSection/Statistical';

const HomePageContain = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" w-11/12 mx-auto my-10">
        <Statistical></Statistical>
      </div>
    </div>
  );
};

export default HomePageContain;
