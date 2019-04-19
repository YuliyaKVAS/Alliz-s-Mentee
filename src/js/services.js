import { getData, postData } from './api';

export const getCourses = () => getData('courses')
  .then((result) => {
    const courses = result.data;
    return courses;
  })
  .catch(() => new Error('Server error'));


export const authUser = (login, password) => postData('auth/login',
  {
    login,
    password
  })
  .then(response => response.data)
  .catch(
    error => new Promise((resolve, reject) => {
      if (error.response.status === 401) {
        reject(new Error('Wrong password'));
      } else {
        reject(new Error('Server Error'));
      }
    })
  );

export default { getCourses, authUser };
