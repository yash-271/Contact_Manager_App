import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  // Delete contact handler
  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  // Render list of contacts
  const renderContactList = contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler}
      key={contact.id}
    />
  ));

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
