import React, { PureComponent } from 'react';
import TextField from '../TextField';
import style from './SearchPanel.less';
import Button from '../Button';

const SearchPanel = ({ search, handleSearchChange, handleSubmitSearch }) => (
  <div className={style.searchWrapper}>
    <div className={style.searchPanel}>
      <TextField
        label="Search.."
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleSubmitSearch}
      >
        Search
      </Button>
    </div>
  </div>
);

export default SearchPanel;
