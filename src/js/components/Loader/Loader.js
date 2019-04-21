import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import style from './Loader.less';

const styles = {
  root: {
    flexGrow: 1,
    margin: 8
  }
};

const Loader = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress variant="query" />
      <span className={style.label}>Loading...</span>
      <LinearProgress color="secondary" variant="query" />
    </div>
  );
};

export default withStyles(styles)(Loader);
