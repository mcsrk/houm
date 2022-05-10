import { Col, Row, Typography } from "antd";

// Components
import SearchBar from "./filters/SearchBar";
import FilterType from "./filters/FilterType";

// Consts
const { Text } = Typography;

const Description = () => (
  <Row>
    <Text strong={true} className="m-0 text-3xl text-trueGray-dark w-3/4">
      Encuentra los álbumes, artistas y tracks que más te gustan.
    </Text>
  </Row>
);

const SearchHero = () => {
  return (
    <div className="w-full bg-hero-bg bg-center bg-cover bg-no-repeat pt-8 m-auto">
      <Col className="px-4 mx-auto items-center text-center">
        <Description />
        <FilterType />
        <SearchBar />
      </Col>
    </div>
  );
};

export default SearchHero;
