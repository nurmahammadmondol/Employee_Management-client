import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecuur from '../../../../Axios/useAxiosSecuur';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>EmpowerHub || Admin Dashboard</title>
      </Helmet>
      <div className="flex items-end gap-3 md:gap-10">
        <h6 className="font-bold text-2xl">Admin Dashboard</h6>
      </div>
    </div>
  );
};

export default HomeAdmin;
