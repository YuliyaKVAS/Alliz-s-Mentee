import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField as MuiTextField } from '@material-ui/core';
import styles from './styles';

const TextField = ({
  label, value, onChange, classes, variant, type, name
}) => (
  <MuiTextField
    label={label}
    value={value}
    onChange={onChange}
    className={classes.textField}
    variant={variant}
    type={type}
    name={name}
  />
);

export default withStyles(styles)(TextField);
