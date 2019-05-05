import React, { PureComponent } from 'react';
import { getCourses, getSearchData, getMoreData } from '../../services';
import AddCoursePanel from '../AddCoursePanel';
import CoursesList from '../CoursesList';

class Courses extends PureComponent {
  state = {
    search: '',
    courses: [],
    isFetching: true,
    page: 1,
    isAllData: false
  }

  componentDidMount() {
    getMoreData(this.state.page)
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
      .then(() => this.setState({ search: '' }))
      .catch(() => this.setState({ courses: [] }));
  }

  handleClickMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), () => {
      getMoreData(this.state.page)
        .then((courses) => {
          if (courses === []) {
            this.setState({ isAllData: true });
            return;
          }
          this.setState(prevState => ({ courses: prevState.courses.concat(courses) }));
        })
        .then(() => this.setState({ isFetching: false }));
    });
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
          handleClickMore={this.handleClickMore}
          isAllData={this.state.isAllData}
        />
      </>
    );
  }
}

export default Courses;
