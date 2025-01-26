import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const HomeHR = () => {
  const { User } = useContext(AuthContext);
  //  console.log(User);
  return (
    <div>
      <h4 className="text-cyan-800 text-center border-b-2 border-black font-bold text-lg md:text-3xl mb-5">
        {User?.displayName} (HR)
      </h4>
      <p>hr home</p>
    </div>
  );
};

export default HomeHR;
