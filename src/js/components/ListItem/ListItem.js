import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import style from './ListItem.less';
import Button from '../Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: 8
  }
});

const ListItem = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <div className={style.first}>
        <h5 className={style.listTitle}>
          Video course
        </h5>
        <div className={style.group}>
          <span className={style.timing}>
            27 min
          </span>
          <span className={style.date}>
            27.09.17
          </span>
          <Button
            color="primary"
            variant="outlined"
          >
            Edit
          </Button>
        </div>
      </div>
      <div className={style.second}>
        <span>
          lallaalalalalalalalalallllalallalalallalallalala
          skkkkkkkkkkkkkkkkkkkkkkskkskl
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
};

export default withStyles(styles)(ListItem);
