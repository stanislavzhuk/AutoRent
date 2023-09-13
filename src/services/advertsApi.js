import axios from 'axios';

axios.defaults.baseURL = 'https://6500b83518c34dee0cd555f8.mockapi.io/adverts';

export const getAdverts = async (page = 1) => {
  const { data } = await axios.get(`?page=${page}&limit=8`);
  return data;
};

export const getAdvertById = async id => {
  const { data } = await axios.get(`/${id}`);
  return data;
};
