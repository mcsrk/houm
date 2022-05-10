import { List } from "antd";
import { useMemo, useContext } from "react";

// Utils
import SpotifyContext from "context/spotifyContext";

// Components
import SongCard from "./card/SongCard";

const SongsList = ({ loading, tracks }) => {

  const { totalCount, limit, setOffset, setLimit, } = useContext(SpotifyContext);
  
  setLimit("5")

  return useMemo(
    () => (
      <List
        loading={loading}
        className="p-2 mx-auto min-w-min max-w-max rounded-md shadow-lg bg-white mt-12"
        size="small"
        dataSource={tracks}
        renderItem={(track) => <SongCard trackData={track.data} />}
        pagination={{
          onChange: page => { 
            setOffset(limit * (page-1))
          },
          pageSize: limit,
          showSizeChanger:false,
          total:totalCount,
          size:"small",
          className:"text-center"
        }}
    
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, tracks, limit]
  );
};

export default SongsList;
