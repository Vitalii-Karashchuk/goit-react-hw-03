import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';
//
export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul className={css.listContacts}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
