const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Поиск криптовалюты..."
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
  