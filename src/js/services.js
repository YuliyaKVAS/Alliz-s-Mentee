import { getJSON } from './api';

export const getCourses = () => getJSON('courses')
  .then((result) => {
    const courses = result.data;
    return courses;
  })
  .catch(error => console.log(error));

export default { getCourses };
