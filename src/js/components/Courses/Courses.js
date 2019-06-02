import React, { PureComponent } from 'react';
import { getSearchData, getMoreData, deleteCourse } from '../../services';
import AddCoursePanel from '../AddCoursePanel';
import CoursesList from '../CoursesList';

const limit = 4;
class Courses extends PureComponent {
  state = {
    search: '',
    courses: [],
    isFetching: true,
    page: 1,
    loadedDataLength: limit
  }

  componentDidMount() {
    this.fetchMoreData();
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmitSearch = () => {
    getSearchData(this.state.search)
      .then(courses => this.setState({ courses }))
      .then(() => this.setState({ isFetching: false }))
      .then(() => this.setState({ search: '' }))
      .catch(() => this.setState({ courses: [] }));
  }

  handleClickMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), () => {
      this.fetchMoreData()
        .catch(() => this.setState({ page: 1 }));
    });
  }

  fetchMoreData = () => getMoreData(this.state.page, limit)
    .then((courses) => {
      this.setState({ loadedDataLength: courses.length });
      this.setState(prevState => ({ courses: [...prevState.courses, ...courses] }));
    })
    .then(() => this.setState({ isFetching: false }));


  isAllDataLoaded = () => this.state.loadedDataLength < limit

  handleDeleteCourse = (currentCourse) => {
    const remainingCourses = this.state.courses.filter(
      course => course.id !== currentCourse.id
    );
    deleteCourse(currentCourse.id)
      .then(() => this.setState({ isFetching: true }))
      .then(() => this.setState({ courses: remainingCourses }))
      .then(() => this.setState({ isFetching: false }));
  }

  render() {
    const { search, isFetching, courses } = this.state;
    return (
      <>
        <AddCoursePanel
          search={search}
          handleSearchChange={this.handleSearchChange}
          handleSubmitSearch={this.handleSubmitSearch}
        />
        <CoursesList
          isFetching={isFetching}
          courses={courses}
          handleClickMore={this.handleClickMore}
          isAllDataLoaded={this.isAllDataLoaded}
          handleDeleteCourse={this.handleDeleteCourse}
        />
      </>
    );
  }
}

export default Courses;
