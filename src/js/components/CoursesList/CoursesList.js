import React from 'react';
import { contextConsumer } from '../../context/apiContext';
import { parseTime, parseDate } from '../../helpers';
import { dataArray } from './data';
import CourseItem from '../CourseItem';
import Dropdown from '../Dropdown';
import Loader from '../Loader';
import Button from '../Button';

import { container, header, block } from './CoursesList.less';

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

const CoursesList = ({
  isFetching, courses, onSortingByName, ...props
}) => (
  <div className={container}>
    <div className={block}>
      <span className={header}>
        Courses
      </span>
      <Dropdown
        onChange={onSortingByName}
        dataArray={dataArray}
      />
    </div>


    {isFetching && <Loader />}
    {renderList(courses, { isAuth: props.context.isAuth })}
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

export default contextConsumer(CoursesList);
