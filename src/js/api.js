import axios from 'axios';

const baseURL = 'http://localhost:3004/';

const instance = axios.create({
  baseURL,
  timeout: 20000
});

export const getData = url => instance.get(url)
  .then(({ data }) => data)
  .catch(() => new Error('Server error'));

export const postData = (url, body) => {
  const options = {
    headers: { 'Content-Type': 'application/json' }
  };
  return instance.post(url, body, options);
};

export const putData = (url, body) => instance.put(url, body);

export const putById = (url, id, body) => instance.put(`${url}/${id}`, body);

export const deleteData = (url, id) => instance.delete(`${url}/${id}`);
