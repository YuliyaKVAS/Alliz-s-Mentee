import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import style from './SearchPanel.less';
import Button from '../Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  }
});

class SeachPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={style.searchWrapper}>
        <div className={style.searchPanel}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="outlined"
            color="primary"
          >
            Search
          </Button>
        </div>
        <Button
          variant="contained"
          color="primary"
        >
            Add course
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(SeachPanel);
