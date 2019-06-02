import React from 'react';
import { Link } from 'react-router-dom';
import { contextConsumer } from '../../context/apiContext';
import SearchPanel from '../SearchPanel';
import Button from '../Button';
import styles from './AddCoursePanel.less';


const addCourseLink = props => <Link to="/add-course" {...props} />;
const AddCoursePanel = ({
  search, handleSubmitSearch, handleDebounceSearch, ...props
}) => (
  <div className={styles.panel}>
    <SearchPanel
      search={search}
      handleSubmitSearch={handleSubmitSearch}
      onUpdateIput={props.onUpdateIput}
      handleDebounceSearch={handleDebounceSearch}
    />
    {props.context.isAuth && (
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

export default contextConsumer(AddCoursePanel);
