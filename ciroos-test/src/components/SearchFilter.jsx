const SearchBar = ({ search, setSearch, onReset }) => {
  return (
    <div className="flex gap-4 items-center w-full min-w-0">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 w-full min-w-0 border rounded-lg px-4 py-2 shadow-sm"
      />

      <button
        onClick={onReset}
        className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-lg shadow font-semibold transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default SearchBar;
