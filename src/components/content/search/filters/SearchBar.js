import { Affix, Input } from "antd";

// Consts
const { Search } = Input;

const SearchBar = ({ onSearch, searchTerm, setSearchTerm }) => {
  return (
    <Affix className="w-3/4 my-3 mx-auto" offsetTop={10}>
      <Search
        placeholder="Buscar album..."
        size="large"
        enterButton
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onSearch={onSearch}
      />
    </Affix>
  );
};

export default SearchBar;
