import React from 'react';
import PropTypes from 'prop-types';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  console.log(getTodayString());

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Enter title'
        value={title}
        onChange={handleTitle}
      />
      <input
        type='date'
        name='date'
        value={date}
        onChange={handleDate}
        min={getTodayString}
      />
      <input type='time' name='time' value={time} onChange={handleTime} />
      <ContactPicker
        contacts={contacts}
        selectContact={handleContact}
        value={contact}
      />
      <input type='submit' value='MAKE APPOINTMENT' />
    </form>
  );
};

AppointmentForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  setTitle: PropTypes.func,
  contact: PropTypes.string,
  setContact: PropTypes.func,
  date: PropTypes.string,
  setDate: PropTypes.func,
  time: PropTypes.string,
  setTime: PropTypes.func,
  handleSubmit: PropTypes.func,
};
