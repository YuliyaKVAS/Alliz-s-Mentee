import React from 'react';
import TextField from '../TextField';
import style from './SearchPanel.less';
import Button from '../Button';

class SeachPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div className={style.searchWrapper}>
        <div className={style.searchPanel}>
          <TextField
            label="Search.."
            variant="outlined"
          />
          <Button
            variant="outlined"
            color="primary"
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default SeachPanel;
