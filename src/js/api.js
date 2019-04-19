import axios from 'axios';

const baseURL = 'http://localhost:3004/';

const instance = axios.create({
  baseURL,
  timeout: 20000
});

export const getJSON = url => instance.get(url);

export const postJSON = (url, body) => {
  const options = {
    headers: { 'Content-Type': 'application/json' }
  };
  return instance.post(url, body, options);
};

export const putJSON = (url, body) => instance.put(url, body);

export const putById = (url, id, body) => instance.put(`${url}/${id}`, body);

export const deleteJSON = (url, id) => instance.delete(`${url}/${id}`);

export default {
  getJSON, postJSON, putJSON, putById, deleteJSON
};
