import React from 'react';
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
    item={item}
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
    {renderList(courses, {
      handleDeleteCourse: props.handleDeleteCourse,
      isFetching
    })}
    {!isFetching && (
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={props.handleClickMore}
        disabled={props.isAllDataLoaded()}
      >
        {props.isAllDataLoaded() ? 'All data loaded' : 'Load More'}
      </Button>
    )}
  </div>
);

export default CoursesList;
