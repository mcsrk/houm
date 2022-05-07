import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";

import "../../styles/content.css";
import FilterActionType from "./filters/FilterActionType";
import FilterSelectMain from "./filters/FilterSelectMain";
import FilterOne from "./filters/FilterOne";

const { Content } = Layout;

const { Text } = Typography;

const CustomContent = () => {
  return (
    <Content style={{ background: "#fff", marginTop: 60 }}>
      <Layout
        style={{
          background: "#fff",
          margin: 50,
        }}
      >
        <Text strong={true} className="m-0 text-3xl text-trueGray-dark">
          Arrienda sin codeudor,
        </Text>
        <Text strong={true} className="m-0 text-3xl text-trueGray-dark">
          compra con facilidad
        </Text>
        <div className="container mx-44 my-8 w-9/12">
          <Col>
            <Row>
              <FilterActionType />
            </Row>
            <Row>
              <FilterSelectMain />
            </Row>
            <Row>
              <Col>
                <FilterOne />
              </Col>
              <Col>
                <FilterOne />
              </Col>
              <Col>
                <FilterOne />
              </Col>
            </Row>
            <Row>
              <Button>Buscar mi hogar ideal</Button>
            </Row>
          </Col>
        </div>
      </Layout>
    </Content>
  );
};

export default CustomContent;
