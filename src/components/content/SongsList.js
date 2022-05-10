import { List } from "antd";
import { useMemo, useContext, useEffect } from "react";

// Utils
import SpotifyContext from "context/spotifyContext";

// Components
import SongCard from "./card/SongCard";

const SongsList = ({ loading, tracks }) => {
  const { totalCount, limit, setOffset, setLimit } = useContext(SpotifyContext);

  useEffect(() => {
    setLimit("10");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(
    () => (
      <List
        loading={loading}
        className="mx-auto mt-12 w-96 max-w-max rounded-md shadow-lg bg-white custom-list"
        size="small"
        dataSource={tracks}
        renderItem={(track) => <SongCard trackData={track.data} />}
        pagination={{
          onChange: (page) => {
            setOffset(limit * (page - 1));
          },
          pageSize: limit,
          showSizeChanger: false,
          total: totalCount,
          size: "small",
          className: "text-center",
        }}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, tracks, limit]
  );
};

export default SongsList;
