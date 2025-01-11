import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    // Lazy initialization to read from localStorage only once during initial render
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [];
  });

  const addContactHandler = (contact) => {
    if (!contact.name || !contact.email) {
      alert("Both name and email are required.");
      return;
    }
    setContacts((prevContacts) => [...prevContacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    // Sync contacts with localStorage whenever the `contacts` state changes
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
