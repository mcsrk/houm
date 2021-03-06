import { createContext } from "react";

export default createContext({

  // States
  searchTerm: null,
  queryType: null,
    // Pagination
  totalCount: null,
  offset: null,
  limit: null,
  numOfTopResult: null,

  // Setters  
  setSearchTerm: () => {},
  setQueryType: () => {},

  setTotalCount: ()=>{},
  setOffset: ()=>{},
  setLimit: ()=>{},
  setNumOfTopResult: ()=>{},

  onSearch: () => {},
});
