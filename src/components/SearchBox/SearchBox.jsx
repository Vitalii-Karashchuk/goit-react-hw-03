import css from '../SearchBox/SearchBox.module.css';

export default function SearchBox({ value, onhandleSearch }) {
  const handleSearch = (ev) => {
    onhandleSearch(ev.target.value);
  };
  return (
    <div className={css.searchStyle}>
      <label>Find contacts by name</label>
      <input
        className={css.inputStyle}
        type="text"
        value={value}
        onChange={handleSearch}
      />
    </div>
  );
}
