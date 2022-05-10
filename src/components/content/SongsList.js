import { List } from "antd";
import { useMemo } from "react";

// Components
import SongCard from "./card/SongCard";

const SongsList = ({ loading, tracks }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="mx-auto max-w-max rounded-md shadow-lg bg-white mt-12"
        size="small"
        dataSource={tracks}
        renderItem={(track) => <SongCard trackData={track.data} />}
      />
    ),
    [loading, tracks]
  );
};

export default SongsList;
