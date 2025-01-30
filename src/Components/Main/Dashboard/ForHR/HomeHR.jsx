import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const HomeHR = () => {
  const { User, userData } = useContext(AuthContext);
  //  console.log(User);
  return (
    <div>
      <Helmet>
        <title>EmpowerHub || Hr Home</title>
      </Helmet>

      <h4 className="text-cyan-800  border-b-2 border-black font-bold text-lg  mb-5">
        My Profile
      </h4>
      <div className="flex items-center gap-5 md:gap-16 ">
        <div className="w-1/3 h-[100px] md:h-[350px] border-2 rounded-full">
          <img
            className="w-full h-full rounded-full"
            src={userData?.Photo}
            alt=""
          />
        </div>

        <div className="w-2/3 text-xs md:text-lg space-y-3 md:space-y-0 grid grid-cols-2 md:grid-cols-1 md:gap-5 ">
          <div className="">
            <p className="text-2xl md:text-4 lg:text-5xl font-semibold md:mb-3">
              {userData?.Name}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-xs">Email</p>
            <p>{userData?.Email}</p>
          </div>

          <div>
            <p>
              <span className="text-gray-400 ">ID : </span>
              {userData?._id}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-xs">Role</p>
            <p>{userData?.UserRole}</p>
          </div>

          <div>
            <p className="text-gray-400 text-xs">Bank Account</p>
            <p>{userData?.BankAccount || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHR;
