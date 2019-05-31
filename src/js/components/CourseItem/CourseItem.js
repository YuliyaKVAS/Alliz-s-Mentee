import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  first, listTitle, group, timeLabel, dateLabel, second
} from './CourseItem.less';
import Button from '../Button';
import styles from './styles';

const CourseItem = ({
  title, timing, date, text, classes, isAuth, item, ...props
}) => {
  const deleteCourse = () => props.handleDeleteCourse(item);

  return (
    <Paper className={classes.root}>
      <div className={first}>
        <h5 className={listTitle}>
          {title}
        </h5>
        <div className={group}>
          <span className={timeLabel}>
            {timing}
          </span>
          <span className={dateLabel}>
            {date}
          </span>
          {isAuth && (
            <Button
              color="primary"
              variant="outlined"
            >
            Edit
            </Button>
          )}
        </div>
      </div>
      <div className={second}>
        <span>
          {text}
        </span>
        {isAuth && (
          <Button
            color="secondary"
            variant="outlined"
            onClick={deleteCourse}
          >
          Delete
          </Button>
        )}
      </div>
    </Paper>
  );
};

export default withStyles(styles)(CourseItem);
