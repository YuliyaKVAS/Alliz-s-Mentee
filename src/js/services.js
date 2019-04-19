import { getData } from './api';

export const getCourses = () => getData('courses')
  .then((result) => {
    const courses = result.data;
    return courses;
  })
  .catch(() => new Error('Server error'));

export default { getCourses };
