import { Col, Row, Typography } from "antd";

import SearchBar from "./filters/SearchBar";
import FilterType from "./filters/FilterType";

const { Text } = Typography;

const SearchHero = ({ onSearch, searchTerm, setSearchTerm, queryType,  setQueryType }) => {
  return (
    <div
      className="min-h-full bg-hero-bg bg-center bg-cover bg-no-repeat pt-8"
      style={{
        maxWidth: "100%",
        height: "auto",
        minHeight: "200px",
      }}
    >
      <Col
        className="px-4 mx-auto items-center text-center"
        style={{
          maxWidth: "700px",
        }}
      >
        <Row>
          <Text strong={true} className="m-0 text-3xl text-trueGray-dark w-3/4">
            Encuentra los álbumes, artistas y tracks que más te gustan.
          </Text>
        </Row>

        <FilterType queryType={queryType} setQueryType={setQueryType}/>

        <SearchBar
          onSearch={onSearch}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          
        />
      </Col>
    </div>
  );
};

export default SearchHero;
