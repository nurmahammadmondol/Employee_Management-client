import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCreative, Pagination, Autoplay } from 'swiper/modules';

const AllUsersDeshboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-10">
      {/* Admin  */}
      <div className="col-span-3 border rounded-lg p-3">
        <h5>Admin</h5>
      </div>
      <div className=" col-span-2">
        <Swiper
          effect="creative"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Change every 3 seconds
            disableOnInteraction: false,
          }}
          loop={true} // Enable looping for continuous slide
          creativeEffect={{
            prev: {
              translate: [-200, 0, -250], // Previous slide will move much more to the left
              rotate: [-8],
              opacity: 0.6,
              scale: 0.9, // Zoom Out effect
            },
            next: {
              translate: [200, 0, -250], // Next slide will move much more to the right
              rotate: [8],
              opacity: 0.6,
              scale: 0.9, // Zoom Out effect
            },
            current: {
              scale: 1, // Current slide will scale to full size
            },
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-blue-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/ccC8KkzZ/Screenshot-2025-03-10-220252.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-green-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/YFLGkdzy/Screenshot-2025-03-10-220316.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-red-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/xKQYpRTW/Screenshot-2025-03-10-221900.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-yellow-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/XrN8HXZh/Screenshot-2025-03-10-221924.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-yellow-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/N4vC7Qq/Screenshot-2025-03-10-220328.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-yellow-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/3y1zrpWs/Screenshot-2025-03-11-003556.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-yellow-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/M513KF4p/Screenshot-2025-03-10-220350.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-yellow-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/B5WWz4JG/Screenshot-2025-03-10-223026.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* HR  */}
      <div className=" col-span-2">
        <Swiper
          effect="creative"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Change every 3 seconds
            disableOnInteraction: false,
          }}
          loop={true} // Enable looping for continuous slide
          creativeEffect={{
            prev: {
              translate: [-200, 0, -250], // Previous slide will move much more to the left
              rotate: [-8],
              opacity: 0.6,
              scale: 0.9, // Zoom Out effect
            },
            next: {
              translate: [200, 0, -250], // Next slide will move much more to the right
              rotate: [8],
              opacity: 0.6,
              scale: 0.9, // Zoom Out effect
            },
            current: {
              scale: 1, // Current slide will scale to full size
            },
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-blue-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/RphXr5Px/Screenshot-2025-03-10-220626.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-green-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/dsLfzs93/Screenshot-2025-03-10-220643.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/JjKft3tz/Screenshot-2025-03-11-004910.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-yellow-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/FL7NkdJJ/Screenshot-2025-03-10-222759.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-red-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/Lhdc00F0/Screenshot-2025-03-10-220658.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-red-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/Fky2bWWV/Screenshot-2025-03-11-005358.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-yellow-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/WWM13mVQ/Screenshot-2025-03-11-005932.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-3 border rounded-lg p-3">
        <h5>HR</h5>
      </div>

      {/* Employee  */}

      <div className="col-span-3 border rounded-lg p-3">
        <h5>Employee</h5>
      </div>
      <div className=" col-span-2">
        <Swiper
          effect="creative"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Change every 3 seconds
            disableOnInteraction: false,
          }}
          loop={true} // Enable looping for continuous slide
          creativeEffect={{
            prev: {
              translate: [-200, 0, -250], // Previous slide will move much more to the left
              rotate: [-8],
              opacity: 0.6,
              scale: 0.9, // Zoom Out effect
            },
            next: {
              translate: [200, 0, -250], // Next slide will move much more to the right
              rotate: [8],
              opacity: 0.6,
              scale: 0.9, // Zoom Out effect
            },
            current: {
              scale: 1, // Current slide will scale to full size
            },
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-blue-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/KpPz8tsf/Screenshot-2025-03-10-224136.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-green-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/pj1FCBfk/Screenshot-2025-03-10-224551.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/pB8gv02T/Screenshot-2025-03-11-010737.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-500 flex justify-center items-center text-white text-xl rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co.com/ZpbgYdHG/Screenshot-2025-03-11-010805.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AllUsersDeshboard;
