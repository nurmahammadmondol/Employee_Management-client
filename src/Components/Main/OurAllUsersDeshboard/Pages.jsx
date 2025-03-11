import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCreative, Pagination, Autoplay } from 'swiper/modules';

const AllUsersDeshboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-10">
      {/* Admin  */}
      <div className="md:col-span-2 lg:col-span-3 border rounded-lg p-3 space-y-2">
        <h5 className="text-2xl font-bold">Admin Dashboard </h5>
        <p className="text-gray-400">
          The Admin Dashboard provides a centralized platform for managing
          employees, monitoring work progress, and handling financial operations
          efficiently. It helps streamline HR tasks, track performance, and
          ensure smooth salary disbursement.
        </p>
        <ul className="text-gray-400 text-sm">
          <li>
            1. All Employee List: View and manage all employees, verify details,
            and promote employees to HR.
          </li>
          <li>
            2. Work Records: Track employee work history, monitor performance,
            and evaluate productivity.
          </li>
          <li>
            3. Pay Employee Salary: Approve salary payments, track pending
            payments, and manage payroll records.
          </li>
          <li>
            4. Projects & Tasks: Get an overview of ongoing projects, assigned
            tasks, and overall progress.
          </li>
        </ul>
      </div>
      <div className=" lg:col-span-2">
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
      <div className=" lg:col-span-2">
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
      <div className="md:col-span-2 lg:col-span-3 border rounded-lg p-3 space-y-2">
        <h5 className="text-2xl font-bold">HR Dashboard</h5>

        <p className="text-gray-400">
          The HR Dashboard is a powerful tool for managing employee-related
          operations efficiently. It provides insights into employee records,
          work progress, and payroll management.
        </p>

        <ul className="text-gray-400 text-sm">
          <li>
            1. Employee List: View and manage all employees with details and
            verification options.
          </li>
          <li>
            2. Task Monitoring: Oversee assigned tasks and track work
            completion.
          </li>
          <li>
            3. Work Records: Track employee attendance, performance, and task
            progress.
          </li>
          <li>
            4. Payment Requests: Approve salary payments and manage payroll
            efficiently. Review salary expenditures, approved & pending
            payments, and monthly reports.
          </li>
        </ul>
      </div>

      {/* Employee  */}

      <div className="md:col-span-2 lg:col-span-3 border rounded-lg p-3 space-y-2">
        <h5 className="text-2xl font-bold">Employee Dashboard</h5>
        <p className="text-gray-400">
          The Employee Dashboard provides employees with an intuitive interface
          to track their work progress, manage tasks, and view payment history.
        </p>

        <ul className="text-gray-400 text-sm">
          <li>
            1. Work Sheet: View assigned tasks, deadlines, and work progress.
          </li>
          <li>
            2. Task Update: Update task status, mark tasks as completed, or
            request modifications.
          </li>
          <li>
            3. Task Delete: Remove unnecessary or completed tasks from the list.
          </li>
          <li>
            4. Payment History: Track salary payments, view transaction details,
            and check pending payments.
          </li>
        </ul>
      </div>
      <div className=" lg:col-span-2">
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
