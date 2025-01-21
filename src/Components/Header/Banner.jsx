import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Image11 from '../../assets/Photo/Employeemanagement-11.webp';
import Image22 from '../../assets/Photo/Employeemanagement-22.avif';
import Image33 from '../../assets/Photo/Employeemanagement-33.png';
import Image44 from '../../assets/Photo/Employeemanagement-44.webp';
import Image55 from '../../assets/Photo/Employeemanagement-55.png';
import Image66 from '../../assets/Photo/Employeemanagement-66.webp';
import Image77 from '../../assets/Photo/Employeemanagement-77.avif';

const Banner = () => {
  return (
    <Carousel>
      <div className="h-[400px] md:h-[700px] w-full">
        <img className="h-full w-full" src={Image11} />
      </div>
      <div className="h-[400px] md:h-[700px] w-full">
        <img className="h-full w-full" src={Image22} />
      </div>
      <div className="h-[400px] md:h-[700px] w-full">
        <img className="h-full w-full" src={Image33} />
      </div>
      <div className="h-[400px] md:h-[700px] w-full">
        <img className="h-full w-full" src={Image44} />
      </div>
      <div className="h-[400px] md:h-[700px] w-full">
        <img className="h-full w-full" src={Image55} />
      </div>
      <div className="h-[400px] md:h-[700px] w-full">
        <img className="h-full w-full" src={Image66} />
      </div>
      <div className="h-[400px] md:h-[700px] w-full">
        <img className="h-full w-full" src={Image77} />
      </div>
    </Carousel>
  );
};

export default Banner;
