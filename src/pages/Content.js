import React, { useState } from "react";
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

const fetchSearch = async (term, pag_offset, pag_limit) => {
  try {
    const config = {
      params: { term, locale: "en-US", pag_offset, pag_limit },
    };
    const searchRes = await getRequest("search", config);
    console.log(searchRes);
  } catch (error) {
    //Log errors
    console.log(error);
  }
};

const ContentPage = () => {
  const [searchTerm, setSearchTerm] = useState("tame impala");
  const [offset, setOffset] = useState("0");
  const [limit, setLimit] = useState("3");

  return (
    <Content className="bg-white p-14 mt-16">
      <SearchHero />
      <Button onClick={() => fetchSearch(searchTerm, offset, limit)}>
        Buscar TEst
      </Button>
      <div className="container mx-44 my-8 w-9/12">
        <Col>
          <HeroCard songInfo={dummy} />
        </Col>
      </div>
    </Content>
  );
};

export default ContentPage;
