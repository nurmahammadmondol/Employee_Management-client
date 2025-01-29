import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://employee-management-server-two-eight.vercel.app',
});

const useAxionPublic = () => {
  return instance;
};

export default useAxionPublic;
