import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

const useAxiosSecuur = () => {
  return instance;
};

export default useAxiosSecuur;
