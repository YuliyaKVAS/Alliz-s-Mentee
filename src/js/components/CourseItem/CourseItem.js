import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { contextConsumer } from '../../context/apiContext';
import {
  first, listTitle, group, timeLabel, dateLabel, second
} from './CourseItem.less';
import Button from '../Button';
import styles from './styles';

const CourseItem = ({
  title, timing, date, text, classes, item, ...props
}) => {
  const { context } = props;
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
          {context.isAuth && (
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
        {context.isAuth && (
          <Button
            color="secondary"
            variant="outlined"
            onClick={deleteCourse}
            disabled={props.isFetching}
          >
          Delete
          </Button>
        )}
      </div>
    </Paper>
  );
};

export default contextConsumer(withStyles(styles)(CourseItem));
