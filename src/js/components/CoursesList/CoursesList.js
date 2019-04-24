import React from 'react';
import { parseTime, parseDate } from '../../helpers';
import styles from './CoursesList.less';
import ListItem from '../ListItem';
import Loader from '../Loader';
import Button from '../Button';

const renderList = (temp, props) => temp.map(item => (
  <ListItem
    title={item.name}
    timing={parseTime(item.length)}
    text={item.description}
    key={item.id}
    date={parseDate(item.date)}
    {...props}
  />
));

const CoursesList = ({ isFetching, courses, ...props }) => (
  <div className={styles.container}>
    <span className={styles.header}>
  Courses
    </span>
    {isFetching && <Loader />}
    {renderList(courses, props)}
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

export default CoursesList;
