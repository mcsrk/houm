import React from "react";
import { Layout } from "antd";

import "../../styles/content.css";

const { Content } = Layout;

const CustomContent = () => {
  return (
    <Content style={{ background: "#ECF1FE", marginTop: 60 }}>
      <Layout
        style={{
          background: "#ECF1FE",
          margin: 50,
        }}
      >
        <Content
          style={{
            marginLeft: 60,
            marginRight: 60,
          }}
        ></Content>
      </Layout>
    </Content>
  );
};

export default CustomContent;
