import React, { useState } from "react";
import { Button, Layout } from "antd";

import { getRequest } from "../axiosClient";
import SearchHero from "../components/content/search/SearchHero";
import SongsList from "../components/content/SongsList";

const { Content } = Layout;

const ContentPage = () => {
  const [searchTerm, setSearchTerm] = useState("tame impala");
  const [queryType, setQueryType] = useState("tracks");
  const [offset, setOffset] = useState("0");
  const [limit, setLimit] = useState("10");
  const [numOfTopResult, setNumOfTopResult] = useState("5");

  const [tracks, setTracks] = useState();

  const fetchSearch = async (
    searchQ,
    type,
    pag_offset,
    pag_limit,
    numberOfTopResults
  ) => {
    try {
      const config = {
        params: { q: searchQ, type, pag_offset, pag_limit, numberOfTopResults },
      };
      const searchRes = await getRequest("search", config);
      console.log(searchRes.data.tracks.items);
      setTracks(searchRes.data.tracks.items);
    } catch (error) {
      //Log errors
      console.log(error);
      setTracks([]);
    }
  };
  return (
    <Content className="bg-white p-14 mt-16">
      <SearchHero />
      <Button
        onClick={() =>
          fetchSearch(searchTerm, queryType, offset, limit, numOfTopResult)
        }
      >
        Buscar Canción
      </Button>
      <div className="container mx-44 my-8 w-9/12">
        <SongsList tracks={tracks} />
      </div>
    </Content>
  );
};

export default ContentPage;
