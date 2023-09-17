import axios from 'axios';
import { readFromLS, writeToLS } from './localStoreApi';
import smartFilter from './smartFilter';

axios.defaults.baseURL = 'https://6500b83518c34dee0cd555f8.mockapi.io/adverts';

export const getAdverts = async (page = 1) => {
  const { data } = await axios.get(`?page=${page}&limit=8`);
  return data;
};

export const getAdvertById = async id => {
  const { data } = await axios.get(`/${id}`);
  return data;
};

export const getFavotites = async (page = 1) => {
  const { data } = await axios.get(`?favs=true&page=${page}&limit=8`);
  return data;
};

export const toggleFavs = async (id, status) => {
  const { data } = await axios.put(`/${id}`, { favs: status });
  return data;
};

export const getAllAdverts = async () => {
  const defaultRes = await axios.get(`/`);
  return defaultRes;
};

export const search = async (obj, page, shouldUpdateCache) => {
  if (shouldUpdateCache) {
    const defaultRes = await getAllAdverts();
    writeToLS('cars', defaultRes.data);
    const data = readFromLS('cars');
    const result = await smartFilter(data, obj);
    return result.slice(0, page * 8);
  }

  if (readFromLS('cars')) {
    const data = readFromLS('cars');
    const result = await smartFilter(data, obj);
    return result.slice(0, page * 8);
  }
};
