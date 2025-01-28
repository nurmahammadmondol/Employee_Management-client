import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://employee-management-server-site-ashy.vercel.app',
});

const useAxionPublic = () => {
  return instance;
};

export default useAxionPublic;
