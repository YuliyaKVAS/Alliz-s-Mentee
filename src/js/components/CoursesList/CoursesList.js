import React, { PureComponent } from 'react';
import { getCourses } from '../../services';
import styles from './CoursesList.less';
import ListItem from '../ListItem';
import Button from '../Button';

const renderList = temp => temp.map(item => (
  <ListItem title={item.name} timing={item.length} text={item.description} key={item.id} />));
class CoursesList extends PureComponent {
  state = {
    courses: []
  }

  componentDidMount() {
    getCourses()
      .then(courses => this.setState({ courses }));
  }

  render() {
    return (
      <div className={styles.container}>
        <span className={styles.header}>
        Courses
        </span>
        {renderList(this.state.courses)}
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

export default CoursesList;
