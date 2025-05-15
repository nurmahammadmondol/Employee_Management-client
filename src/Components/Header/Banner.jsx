import React, { useContext } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

import Image11 from '../../assets/Photo/Employeemanagement-11.webp';
import Image22 from '../../assets/Photo/Employeemanagement-22.avif';
import Image33 from '../../assets/Photo/Employeemanagement-33.png';
import Image44 from '../../assets/Photo/Employeemanagement-44.webp';
import Image55 from '../../assets/Photo/Employeemanagement-55.png';
import Image66 from '../../assets/Photo/Employeemanagement-66.webp';
import Image77 from '../../assets/Photo/Employeemanagement-77.avif';
import { AuthContext } from '../../Provider/AuthProvider';

const slides = [
  {
    image: Image11,
    title: 'Welcome to EmpowerHub',
    subtitle: 'Your ultimate employee management solution',
  },
  {
    image: Image22,
    title: 'Track Attendance Easily',
    subtitle: 'Real-time attendance monitoring system',
  },
  {
    image: Image33,
    title: 'Streamlined Payroll Management',
    subtitle: 'Auto-generate salary and manage HR approvals',
  },
  {
    image: Image44,
    title: 'Secure Employee Data',
    subtitle: 'Keep all employee records safe and organized',
  },
  {
    image: Image55,
    title: 'Role-Based Access Control',
    subtitle: 'Admins, HRs, and Employees have separate panels',
  },
  {
    image: Image66,
    title: 'Performance Analytics',
    subtitle: 'Track growth, punctuality, and productivity',
  },
  {
    image: Image77,
    title: 'Start Managing Smartly Today!',
    subtitle: 'Empower your team with the right tools',
  },
];

const Banner = () => {
  const navigate = useNavigate();
  const { User, AllUser } = useContext(AuthContext);

  // Protect against undefined/null
  const userRoleChecked =
    User && AllUser?.length > 0
      ? AllUser.find(checkUser => checkUser.Email === User.email)
      : null;

  const handleNavigate = () => {
    if (userRoleChecked?.UserRole === 'Admin') {
      navigate('/DashboardAdmin');
    } else if (userRoleChecked?.UserRole === 'HR') {
      navigate('/DashboardHR');
    } else if (userRoleChecked?.UserRole === 'Employee') {
      navigate('/DashboardEmployes');
    } else {
      navigate('/LoginPage');
    }
  };

  return (
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[400px] md:h-[700px] w-full">
          <img
            src={slide.image}
            className="h-full w-full object-cover"
            alt={slide.title}
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-white text-md md:text-xl max-w-2xl drop-shadow-lg mb-4">
              {slide.subtitle}
            </p>
            <button
              onClick={handleNavigate}
              className="mt-2 px-6 py-2 bg-[#22d3ee] text-white rounded hover:bg-[#1EBDD6] transition duration-300"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
