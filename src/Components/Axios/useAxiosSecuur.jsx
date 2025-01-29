import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://employee-management-server-two-eight.vercel.app',
});

const useAxiosSecuur = () => {
  return instance;
};

export default useAxiosSecuur;
