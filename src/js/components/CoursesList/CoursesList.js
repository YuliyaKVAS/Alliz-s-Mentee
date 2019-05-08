import React from 'react';
import { contextConsumer } from '../../context/apiContext';
import { parseTime, parseDate } from '../../helpers';
import { container, header } from './CoursesList.less';
import CourseItem from '../CourseItem';
import Loader from '../Loader';
import Button from '../Button';

const renderList = (temp, props) => temp.map(item => (
  <CourseItem
    title={item.name}
    timing={parseTime(item.length)}
    text={item.description}
    key={item.id}
    date={parseDate(item.date)}
    {...props}
  />
));

const CoursesList = ({ isFetching, courses, ...props }) => (
  <div className={container}>
    <span className={header}>
  Courses
    </span>
    {isFetching && <Loader />}
    {renderList(courses, { isAuth: props.context.isAuth })}
    {!isFetching && (
      <Button
        variant="contained"
        color="primary"
        fullWidth
      >
        Load more
      </Button>
    )}
  </div>
);

export default contextConsumer(CoursesList);
