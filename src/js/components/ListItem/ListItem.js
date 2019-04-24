import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import style from './ListItem.less';
import Button from '../Button';
import styles from './styles';

const ListItem = ({
  title, timing, date, text, classes, isAuth
}) => (
  <Paper className={classes.root}>
    <div className={style.first}>
      <h5 className={style.listTitle}>
        {title}
      </h5>
      <div className={style.group}>
        <span className={style.timing}>
          {timing}
        </span>
        <span className={style.date}>
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
    <div className={style.second}>
      <span>
        {text}
      </span>
      {isAuth && (
        <Button
          color="secondary"
          variant="outlined"
        >
        Delete
        </Button>
      )}
    </div>
  </Paper>
);

export default withStyles(styles)(ListItem);
