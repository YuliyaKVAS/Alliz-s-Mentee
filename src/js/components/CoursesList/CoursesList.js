import React from 'react';
import withAppContext from '../withAppContext';
import { parseTime, parseDate } from '../../helpers';
import { container, header } from './CoursesList.less';
import ListItem from '../ListItem';
import Loader from '../Loader';
import Button from '../Button';

const renderList = (temp, props) => temp.map(item => (
  <ListItem
    title={item.name.first}
    //timing={parseTime(item.length)}
    //text={item.description}
    key={item.id}
    //date={parseDate(item.date)}
    {...props}
  />
));

const CoursesList = ({ isFetching, courses, ...props }) => (
  <div className={container}>
    <span className={header}>
  Courses
    </span>
    {isFetching && <Loader />}
    {renderList(courses, { isAuth: props.context.isAuth })}
    {!isFetching && (
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={props.handleClickMore}
      >
        {props.isAllData ? 'All results shown' : 'Load more'}
      </Button>
    )}
  </div>
);

export default withAppContext(CoursesList);
