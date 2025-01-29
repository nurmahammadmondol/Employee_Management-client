import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecuur = () => {
  return instance;
};

export default useAxiosSecuur;
