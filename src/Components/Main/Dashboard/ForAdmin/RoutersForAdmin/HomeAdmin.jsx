import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecuur from '../../../../Axios/useAxiosSecuur';
import { AuthContext } from '../../../../../Provider/AuthProvider';

const HomeAdmin = () => {
  const { User } = useContext(AuthContext);
  const AxiosSecuur = useAxiosSecuur();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    AxiosSecuur.get('User')
      .then(res => {
        // console.log(res.data);

        const FindAdminData = res.data.find(user => user.Email === User.email);
        setAdmin(FindAdminData);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <div className="flex items-end gap-3 md:gap-10">
        <div className="w-4/12 md:w-3/12 border">
          <img className="w-full h-full" src={admin?.Photo} alt="Admin Photo" />
        </div>
        <div className=" h-full w-8/12 md:w-9/12 space-y-2">
          <h5 className="md:text-2xl font-bold">{admin?.Name}</h5>
          <p className="text-xs md:text-base flex-wrap">{admin?.Email}</p>
          <small className="text-xs  flex-wrap ">({admin?.UserRole})</small>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
