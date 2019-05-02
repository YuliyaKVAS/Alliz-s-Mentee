import React, { PureComponent } from 'react';
import { getCourses, getSearchData } from '../../services';
import AddCoursePanel from '../AddCoursePanel';
import CoursesList from '../CoursesList';

class Courses extends PureComponent {
  state = {
    search: '',
    courses: [],
    isFetching: true
  }

  componentDidMount() {
    getCourses()
      .then(courses => this.setState({ courses }))
      .then(() => this.setState({ isFetching: false }));
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmitSearch = () => {
    getSearchData(this.state.search)
      .then(courses => this.setState({ courses }))
      .then(() => this.setState({ isFetching: false }))
      .then(() => this.setState({ search: '' }));
  }

  render() {
    return (
      <>
        <AddCoursePanel
          search={this.state.search}
          handleSearchChange={this.handleSearchChange}
          handleSubmitSearch={this.handleSubmitSearch}
        />
        <CoursesList
          isFetching={this.state.isFetching}
          courses={this.state.courses}
        />
      </>
    );
  }
}

export default Courses;
