import { getData, postData } from './api';

export const getCourses = () => getData('courses');

export const getUsers = () => getData('users');

export const authUser = (login, password) => postData('auth/login',
  {
    login,
    password
  })
  .then((response) => {
    localStorage.setItem('token', response.data.token);
    return Promise.resolve(response);
  })
  .catch(
    error => new Promise((resolve, reject) => {
      if (error.response.status === 401) {
        reject(new Error('Wrong password'));
      } else {
        reject(new Error('Server error'));
      }
    })
  );

export const logoutUser = () => localStorage.removeItem('token');