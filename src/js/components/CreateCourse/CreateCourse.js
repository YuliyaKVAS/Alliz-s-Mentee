import React, { PureComponent } from 'react';
import TextField from '../TextField';
import Button from '../Button';
import styles from './CreateCourse.less';

class CreateCourse extends PureComponent {
  state = {
    name: '',
    time: '',
    date: '',
    description: ''
  }

  handleChangeFieldValue = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      name, time, date, description
    } = this.state;
    return (
      <div className={styles.createForm}>
        <span className={styles.createHeader}>Create Course Panel</span>
        <TextField
          name="name"
          label="name"
          onChange={e => this.handleChangeFieldValue(e)}
          value={name}
        />
        <TextField
          name="time"
          label="time"
          onChange={e => this.handleChangeFieldValue(e)}
          value={time}
        />
        <TextField
          name="date"
          label="date"
          onChange={e => this.handleChangeFieldValue(e)}
          value={date}
        />
        <TextField
          name="description"
          label="description"
          onChange={e => this.handleChangeFieldValue(e)}
          value={description}
        />
        <Button
          color="primary"
          disabled={!name || !time || !date || !description}
          variant="contained"
        >
          Create Course
        </Button>
      </div>
    );
  }
}

export default CreateCourse;
