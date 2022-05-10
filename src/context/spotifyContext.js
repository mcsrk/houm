import { createContext } from "react";

export default createContext({
  searchTerm: null,
  queryType: null,
  onSearch: () => {},
  setSearchTerm: () => {},
  setQueryType: () => {},
});
