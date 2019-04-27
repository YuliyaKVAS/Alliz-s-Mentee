import React from 'react';
import ApiContext from '../ApiContext';
import AddCoursePanel from '../AddCoursePanel';
import CoursesList from '../CoursesList';

const Courses = () => (
  <ApiContext.Consumer>
    {api => (
      <>
        <AddCoursePanel />
        <CoursesList />
      </>
    )}
  </ApiContext.Consumer>
);

export default Courses;
