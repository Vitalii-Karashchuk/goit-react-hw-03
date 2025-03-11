import { useEffect, useState } from 'react';
import css from '../App/App.module.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import contacts from '../../../contacts.json';

export default function App() {
  const [contact, setContact] = useState(() => {
    const saveContacts = localStorage.getItem('contactList');
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    }
    return contacts;
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contact));
  }, [contact]);

  const addContact = (newContact) => {
    setContact((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const handleInpSearch = (newInput) => {
    setSearch(newInput);
  };

  const deleteContact = (contactId) => {
    console.log(' App contactId:', contactId);
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const contactSearch = contact.filter((contac) =>
    contac.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onaddContact={addContact} />
      <SearchBox onhandleSearch={handleInpSearch} value={search} />
      <ContactList contacts={contactSearch} onDelete={deleteContact} />
    </div>
  );
}
