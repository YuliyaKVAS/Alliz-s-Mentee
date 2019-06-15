import React from 'react';
import TextField from '../TextField';
import Button from '../Button';

import { searchWrapper, searchPanel } from './SearchPanel.less';

const SearchPanel = ({ search, handleSearchChange, handleSubmitSearch }) => (
  <div className={searchWrapper}>
    <div className={searchPanel}>
      <TextField
        label="Search.."
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
      />
      <Button
        variant="outlined"
        color="primary"
        disabled={!search}
        onClick={handleSubmitSearch}
      >
        Search
      </Button>
    </div>
  </div>
);

export default SearchPanel;
