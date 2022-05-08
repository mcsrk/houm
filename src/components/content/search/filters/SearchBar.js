import React from "react";
import { Affix, Input } from "antd";
const { Search } = Input;
const SearchBar = ({ setInput, input }) => {
  return (
    <Affix className="w-3/4 my-3 mx-auto" offsetTop={10}>
      <Search
        placeholder="Buscar album..."
        size="large"
        enterButton
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </Affix>
  );
};

export default SearchBar;
