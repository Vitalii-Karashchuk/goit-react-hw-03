export default function SearchBox({ value, onhandleSearch }) {
  const handleSearch = (ev) => {
    onhandleSearch(ev.target.value);
  };
  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" value={value} onChange={handleSearch} />
    </div>
  );
}
