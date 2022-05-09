import React, { useState } from "react";
import { Layout } from "antd";

import { getRequest } from "../axiosClient";
import SearchHero from "../components/content/search/SearchHero";
import SongsList from "../components/content/SongsList";
import { useDebouncedEffect } from "../utils/utils";

const { Content } = Layout;

const ContentPage = () => {
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("tame impala");
  const [queryType, setQueryType] = useState("tracks");
  const [offset, setOffset] = useState("0");
  const [limit, setLimit] = useState("10");
  const [numOfTopResult, setNumOfTopResult] = useState("5");

  const [tracks, setTracks] = useState();

  const fetchSearchData = async () => {
    setLoading(true);
    try {
      const config = {
        params: {
          q: searchTerm,
          type: queryType,
          pag_offset: offset,
          pag_limit: limit,
          numberOfTopResults: numOfTopResult,
        },
      };
      const searchRes = await getRequest("search", config);
      console.log(searchRes.data.tracks.items);
      setTracks(searchRes.data.tracks.items);
      setLoading(false);
    } catch (error) {
      //Log errors
      console.log(error);
      setTracks([]);
      setLoading(false);
    }
  };

  useDebouncedEffect(
    fetchSearchData,
    [searchTerm, queryType, offset, limit, numOfTopResult],
    250
  );

  return (
    <Content className="bg-white p-14 mt-16">
      <SearchHero
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        onSearch={fetchSearchData}
      />

      <div className="container mx-44 my-8 w-9/12 text-center">
        <SongsList loading={loading} tracks={tracks} />
      </div>
    </Content>
  );
};

export default ContentPage;
