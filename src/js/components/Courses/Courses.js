import React from 'react';
import AddCoursePanel from '../AddCoursePanel';
import CoursesList from '../CoursesList';

const Courses = props => (
  <>
    <AddCoursePanel {...props} />
    <CoursesList {...props} />
  </>
);

export default Courses;
