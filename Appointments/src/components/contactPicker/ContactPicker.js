import React from 'react';
import PropTypes from 'prop-types';

export const ContactPicker = ({ contacts, selectContact }) => {
  return (
    <select name='contacts' id='contacts-select' onChange={selectContact}>
      <option value='' key={-1} selected>
        -- No contact selected --
      </option>
      {contacts?.map((contact) => (
        <option value={contact.name} key={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  selectContact: PropTypes.func,
};
