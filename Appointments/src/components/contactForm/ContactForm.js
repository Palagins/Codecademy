import React from 'react';
import PropTypes from 'prop-types';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={handleName}
        placeholder='Enter name'
      />
      <input
        type='tel'
        name='phone'
        value={phone}
        onChange={handlePhone}
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        placeholder='Phone number: ###-###-####'
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={handleEmail}
        placeholder='Enter email'
      />
      <input type='submit' value='ADD CONTACT' />
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  handleSubmit: PropTypes.func,
};
