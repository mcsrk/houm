import React from "react";
import { Button, Col, Layout } from "antd";

import { getRequest } from "../axiosClient";
import SearchHero from "../components/content/search/SearchHero";
import HeroCard from "../components/content/card/HeroCard";

const { Content } = Layout;

const dummy = {
  title: "La odisea",
  prices: [{ price: 2.99, type: "printPrice" }],
  images: [],
  creators: { items: [{ name: "Jhon" }] },
};

async function fetchSearch() {
  try {
    const searchRes = await getRequest("search", "tame impala", "0", "5");
    console.log(searchRes);
  } catch (error) {
    //Log errors
    console.log(error);
  }
}

const ContentPage = () => {
  return (
    <Content className="bg-white p-14 mt-16">
      <SearchHero />
      <Button onClick={fetchSearch}>Buscar TEst</Button>
      <div className="container mx-44 my-8 w-9/12">
        <Col>
          <HeroCard songInfo={dummy} />
        </Col>
      </div>
    </Content>
  );
};

export default ContentPage;
