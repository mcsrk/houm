import React from "react";
import { Col, Layout } from "antd";

import SearchHero from "../components/content/search/SearchHero";
import HeroCard from "../components/content/card/HeroCard";

const { Content } = Layout;

const dummy = {
  title: "La odisea",
  prices: [{ price: 2.99, type: "printPrice" }],
  images: [],
  creators: { items: [{ name: "Jhon" }] },
};

const ContentPage = () => {
  return (
    <Content className="bg-white p-14 mt-16">
      <SearchHero />

      <div className="container mx-44 my-8 w-9/12">
        <Col>
          <HeroCard songInfo={dummy} />
        </Col>
      </div>
    </Content>
  );
};

export default ContentPage;
