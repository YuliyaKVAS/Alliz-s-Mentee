import React, { PureComponent } from 'react';
import { getCourses, getUsers, getSearchData } from '../../services';
import AddCoursePanel from '../AddCoursePanel';
import CoursesList from '../CoursesList';

class Courses extends PureComponent {
  state = {
    search: '',
    courses: [],
    isFetching: true
  }

  componentDidMount() {
    getUsers()
      .then(courses => this.setState({ courses }))
      .then(() => this.setState({ isFetching: false }));
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmitSearch = () => {
    getSearchData(this.state.search)
      .then(users => this.setState({ courses: users }))
      .then(() => this.setState({ isFetching: false }));
  }

  render() {
    return (
      <>
        <AddCoursePanel
          isAuth={this.props.isAuth}
          setAuth={this.props.setAuth}
          search={this.state.search}
          handleSearchChange={this.handleSearchChange}
          handleSubmitSearch={this.handleSubmitSearch}
        />
        <CoursesList
          isAuth={this.props.isAuth}
          setAuth={this.props.setAuth}
          isFetching={this.state.isFetching}
          courses={this.state.courses}
        />
      </>
    );
  }
}

export default Courses;
