import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

const useAxionPublic = () => {
  return instance;
};

export default useAxionPublic;
