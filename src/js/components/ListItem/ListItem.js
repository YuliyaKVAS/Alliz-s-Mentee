import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  first, listTitle, group, timeLabel, dateLabel, second
} from './ListItem.less';
import Button from '../Button';
import styles from './styles';

const ListItem = ({
  title, timing, date, text, classes
}) => (
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
        <Button
          color="primary"
          variant="outlined"
        >
          Edit
        </Button>
      </div>
    </div>
    <div className={second}>
      <span>
        {text}
      </span>
      <Button
        color="secondary"
        variant="outlined"
      >
        Delete
      </Button>
    </div>
  </Paper>
);

export default withStyles(styles)(ListItem);
