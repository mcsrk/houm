import { useState } from "react";
import { Layout } from "antd";

import { getRequest } from "axiosClient";
import SearchHero from "components/content/search/SearchHero";
import SongsList from "components/content/SongsList";
import { useDebouncedEffect } from "utils/utils";
import ArtistsList from "components/content/ArtistsList";

const { Content } = Layout;

const ContentPage = () => {
  const [loading, setLoading] = useState(false); 

  const [searchTerm, setSearchTerm] = useState("tame impala");
  const [queryType, setQueryType] = useState("tracks");
  const [offset, setOffset] = useState("0");
  const [limit, setLimit] = useState("10");
  const [numOfTopResult, setNumOfTopResult] = useState("5");

  const [tracks, setTracks] = useState([]);
  const [artists, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);

  const isArtist = queryType === "artists";
  const isTrack = queryType === "tracks";
  const isAlbum = queryType === "albums";

  //Generic fetching function for different query types
  const fetchSearchData = async () => {
    setLoading(true);
    const config = {
      params: {
        q: searchTerm,
        type: queryType,
        pag_offset: offset,
        pag_limit: limit,
        numberOfTopResults: numOfTopResult,
      },
    };
    const setters = {
      tracks: setTracks,
      artists: setArtist,
      albums: setAlbums,
    };
    try {
      const searchRes = await getRequest("search", config);
      setters[queryType](searchRes.data[queryType].items);
    } catch (error) {
      console.log(error);
      setters[queryType]([]);
    }
    setLoading(false);
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
        queryType={queryType}
        setQueryType={setQueryType}
      />
      <div className="container mx-44 my-8 w-9/12 text-center">
        {isTrack && <SongsList loading={loading} tracks={tracks} />}
        {isArtist && <ArtistsList loading={loading} artists={artists} />}
        {isAlbum && <span></span>}
      </div>
    </Content>
  );
};

export default ContentPage;
