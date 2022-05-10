import { Affix, Input, Row } from "antd";
import { useContext } from "react";

// Utils
import SpotifyContext from "context/spotifyContext";

const SearchBar = () => {
  const { onSearch, searchTerm, setSearchTerm } = useContext(SpotifyContext);
  return (
    <Affix className="w-2/5 mb-6 mx-auto" offsetTop={10}>
      <Row>
      <Input 
        placeholder="Canción, albúm o artista..."
        size="large"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      /></Row>
      <Row>
      <button
        value={searchTerm}
        className={`mx-auto py-2 px-4 mt-2 cursor-pointer rounded-3xl shadow-xl text-center text-white bg-houmPalette-primary hover:bg-houmtxt-hover`}
        onClick={onSearch}
        onChange={(e) => setSearchTerm(e.target.value)}
      >
       Buscar
      </button></Row>
    </Affix>
  );
};

export default SearchBar;
