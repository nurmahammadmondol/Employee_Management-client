import React from 'react';
import Banner from '../Header/Banner';
import Statistical from '../Main/StatisticalSection/Statistical';
import OurProcesses from '../Main/OurProcesses/OurProcesses';

const HomePageContain = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" w-11/12 mx-auto my-20">
        <Statistical></Statistical>
      </div>

      <div className="  my-20">
        <OurProcesses></OurProcesses>
      </div>
    </div>
  );
};

export default HomePageContain;
