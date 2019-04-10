import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Button = ({
  variant, color, onClick, disabled, fullWidth, children, classes
}) => (
  <MuiButton
    variant={variant}
    color={color}
    onClick={onClick}
    disabled={disabled}
    className={classes.button}
    fullWidth={fullWidth}
  >
    {children}
  </MuiButton>
);

export default withStyles(styles)(Button);
