import React, { PureComponent } from 'react';
import { getCourses } from '../../services';
import { parseTime, parseDate } from '../../helpers';
import styles from './CoursesList.less';
import ListItem from '../ListItem';
import Loader from '../Loader';
import Button from '../Button';

const renderList = (temp, props) => temp.map(item => (
  <ListItem
    title={item.fakeToken}
    //timing={parseTime(item.length)}
    text={item.login}
    key={item.id}
    //date={parseDate(item.date)}
    {...props}
  />
));
class CoursesList extends PureComponent {
  // state = {
  //   courses: [],
  //   isFetching: true
  // }

  // componentDidMount() {
  //   getCourses()
  //     .then(courses => this.setState({ courses }))
  //     .then(() => this.setState({ isFetching: false }));
  // }

  render() {
    return (
      <div className={styles.container}>
        <span className={styles.header}>
        Courses
        </span>
        {this.props.isFetching && <Loader />}
        {renderList(this.props.courses, this.props)}
        {!this.props.isFetching && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
          >
        Load more
          </Button>
        )}
      </div>
    );
  }
}

export default CoursesList;
