import React from 'react';
import { Link } from 'react-router-dom';
import SearchPanel from '../SearchPanel';
import Button from '../Button';
import styles from './AddCoursePanel.less';

const addCourseLink = props => <Link to="/add-course" {...props} />;
const AddCoursePanel = ({
  isAuth, search, handleSearchChange, handleSubmitSearch
}) => (
  <div className={styles.panel}>
    <SearchPanel
      search={search}
      handleSearchChange={handleSearchChange}
      handleSubmitSearch={handleSubmitSearch}
    />
    {isAuth && (
      <Button
        variant="contained"
        color="primary"
        component={addCourseLink}
      >
      Add course
      </Button>
    )}
  </div>
);

export default AddCoursePanel;
