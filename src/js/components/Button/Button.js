import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const Button = (props) => {
  const { classes } = props;
  return (
    <MuiButton
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes.button}
    >
      {props.children}
    </MuiButton>
  );
};

export default withStyles(styles)(Button);