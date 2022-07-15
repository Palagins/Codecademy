import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TileList } from '../../components/tileList/TileList';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment,
}) => {
  /*
  Define state variables for
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    */
    console.log({ title, contact, date, time });
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}
          contact={contact}
          setContact={setContact}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object),
  contacts: PropTypes.arrayOf(PropTypes.object),
  addAppointment: PropTypes.func.isRequired,
};
