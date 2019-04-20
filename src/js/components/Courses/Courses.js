import React from 'react';
import AddCoursePanel from '../AddCoursePanel';
import CoursesList from '../CoursesList';

const Courses = ({ isAuth, setAuth }) => (
  <>
    <AddCoursePanel isAuth={isAuth} setAuth={setAuth} />
    <CoursesList isAuth={isAuth} setAuth={setAuth} />
  </>
);

export default Courses;
