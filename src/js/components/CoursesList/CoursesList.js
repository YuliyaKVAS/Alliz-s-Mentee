import React from 'react';
import styles from './CoursesList.less';
import ListItem from '../ListItem';
import Button from '../Button';
import template from './template';

const CoursesList = () => {
  const renderList = temp => temp.map(item => (
    <ListItem title={item.title} timing={item.timing} text={item.text} />));
  return (
    <div className={styles.container}>
      <span className={styles.header}>
      Courses
      </span>
      {renderList(template)}
      <Button
        variant="contained"
        color="primary"
        fullWidth
      >
      Load more
      </Button>
    </div>
  );
};

export default CoursesList;
