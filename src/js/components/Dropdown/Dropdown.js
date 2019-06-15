import React from 'react';
import {
  FormControl, Select, InputLabel, MenuItem, withStyles
} from '@material-ui/core';

import { styles } from './styles';

const Dropdown = ({ classes, onChange, dataArray }) => (
  <FormControl className={classes.formControl}>
    <InputLabel>Sort by</InputLabel>
    <Select
      onChange={onChange}
    >
      <MenuItem value="">None</MenuItem>
      {dataArray && dataArray.map((item, index) => (
        <MenuItem value={item.value} key={index}>{item.name}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default withStyles(styles)(Dropdown);
