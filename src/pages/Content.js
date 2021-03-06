import { useState } from "react";
import { Layout } from "antd";

// Components
import ArtistsList from "components/content/ArtistsList";
import SearchHero from "components/content/search/SearchHero";
import SongsList from "components/content/SongsList";
import AlbumsList from "components/content/AlbumsList";

// Utils
import SpotifyContext from "context/spotifyContext";
import { getRequest } from "axiosClient";
import { useDebouncedEffect } from "utils/utils";

// Consts
const { Content } = Layout;

const ContentPage = () => {
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [queryType, setQueryType] = useState("tracks");
  const [totalCount, setTotalCount] = useState("0");
  const [offset, setOffset] = useState("0");
  const [limit, setLimit] = useState("0");
  const [numOfTopResult, setNumOfTopResult] = useState("0");

  const [tracks, setTracks] = useState([]);
  const [artists, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);

  const isArtist = queryType === "artists";
  const isTrack = queryType === "tracks";
  const isAlbum = queryType === "albums";

  // Generic fetching function for different API query types
  const fetchSearchData = async () => {
    const data = {
      params: {
        q: searchTerm !== "" ? searchTerm : "rock",
        type: queryType,
        offset: offset,
        limit: limit,
        numberOfTopResults: numOfTopResult,
      },
    };
    // Define a setter object based on
    // - possible client query types
    const setters = {
      tracks: setTracks,
      artists: setArtist,
      albums: setAlbums,
    };
    setLoading(true);
    try {
      const searchRes = await getRequest("search", data);
      setters[queryType](searchRes.data[queryType].items);
      setTotalCount(searchRes.data[queryType].totalCount);
    } catch (error) {
      console.error(error);
      setters[queryType]([]);
      setTotalCount(0);
    }
    setLoading(false);
  };

  useDebouncedEffect(
    fetchSearchData,
    [searchTerm, queryType, offset, limit, numOfTopResult],
    250
  );

  return (
    <Content className="w-full pb-14">
      <SpotifyContext.Provider
        value={{
          searchTerm,
          queryType,
          totalCount,
          offset,
          limit,
          numOfTopResult,

          setSearchTerm,
          setQueryType,
          setTotalCount,
          setOffset,
          setLimit,
          setNumOfTopResult,

          onSearch: fetchSearchData,
        }}
      >
        <SearchHero />
        <div className="w-full pt-4 m-auto flex justify-center items-center">
          {isTrack && <SongsList loading={loading} tracks={tracks} />}
          {isArtist && <ArtistsList loading={loading} artists={artists} />}
          {isAlbum && <AlbumsList loading={loading} albums={albums} />}
        </div>
      </SpotifyContext.Provider>
    </Content>
  );
};

export default ContentPage;
