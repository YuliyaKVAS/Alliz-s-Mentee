import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Button = ({
  variant, color, onClick, disabled, fullWidth, children, classes, component
}) => (
  <MuiButton
    variant={variant}
    color={color}
    onClick={onClick}
    disabled={disabled}
    className={classes.button}
    fullWidth={fullWidth}
    component={component}
  >
    {children}
  </MuiButton>
);

export default withStyles(styles)(Button);
