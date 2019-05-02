import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { createCourse } from '../../services';
import TextField from '../TextField';
import Button from '../Button';
import styles from './CreateCourse.less';

const coursesLink = props => <Link to="/courses" {...props} />;
const getTextField = (name, value, cb, placeholder, helpText) => (
  <TextField
    name={name}
    label={name}
    onChange={e => cb(e)}
    value={value}
    placeholder={placeholder}
    helperText={helpText}
  />
);

class CreateCourse extends PureComponent {
    state = {
      name: '',
      length: '',
      description: ''
    };

    handleChangeFieldValue = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }

    handleCreateCourse = () => {
      const { name, length, description } = this.state;
      createCourse(name, length, description)
        .then(() => this.props.history.push('/courses'));
    }

    render() {
      const { name, length, description } = this.state;
      const timePlaceholder = 'Enter time in seconds';
      const helperText = 'for example, 123';

      return (
        <div className={styles.createForm}>
          <span className={styles.createHeader}>Create Course Panel</span>
          {getTextField('name', name, this.handleChangeFieldValue)}
          {getTextField('length', length, this.handleChangeFieldValue, timePlaceholder, helperText)}
          {getTextField('description', description, this.handleChangeFieldValue)}
          <Button
            color="primary"
            disabled={!name || !length || !description}
            variant="contained"
            onClick={this.handleCreateCourse}
          >
            Create Course
          </Button>
          <Button
            color="secondary"
            variant="contained"
            component={coursesLink}
          >
            Go back
          </Button>
        </div>
      );
    }
}

export default CreateCourse;
