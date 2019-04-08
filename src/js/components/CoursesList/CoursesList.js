import React from 'react';
import styles from './CoursesList.less';
import ListItem from '../ListItem';
import Button from '../Button';

const CoursesList = () => (
  <div className={styles.container}>
    <span className={styles.header}>
      Courses
    </span>
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <Button
      variant="contained"
      color="primary"
      fullWidth
    >
      Load more
    </Button>
  </div>
);

export default CoursesList;
