import css from '../Contact/Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.itemContact}>
      <div className={css.info}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{number}</p>
      </div>
      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
