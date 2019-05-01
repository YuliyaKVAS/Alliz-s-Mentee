import React, { PureComponent } from 'react';
import withAppContext from '../withAppContext';
import { getCourses } from '../../services';
import { parseTime, parseDate } from '../../helpers';
import { container, header } from './CoursesList.less';
import ListItem from '../ListItem';
import Loader from '../Loader';
import Button from '../Button';

const renderList = (temp, props) => temp.map(item => (
  <ListItem
    title={item.name}
    timing={parseTime(item.length)}
    text={item.description}
    key={item.id}
    date={parseDate(item.date)}
    {...props}
  />
));
class CoursesList extends PureComponent {
  state = {
    courses: [],
    isFetching: true
  }

  componentDidMount() {
    getCourses()
      .then(courses => this.setState({ courses }))
      .then(() => this.setState({ isFetching: false }));
  }

  render() {
    const { isFetching, courses } = this.state;
    if (isFetching) {
      return (
        <div className={container}>
          <Loader />
        </div>
      );
    }
    return (
      <div className={container}>
        <span className={header}>
          Courses
        </span>
        {renderList(courses, { isAuth: this.props.context.isAuth })}
        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Load more
        </Button>
      </div>
    );
  }
}

export default withAppContext(CoursesList);
