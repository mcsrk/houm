import { List } from "antd";
import { useMemo } from "react";

// Components
import SongCard from "./card/SongCard";

const SongsList = ({ loading, tracks }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="w-full m-auto rounded-md shadow-lg"
        size="small"
        dataSource={tracks}
        renderItem={(track) => <SongCard trackData={track.data} />}
      />
    ),
    [loading, tracks]
  );
};

export default SongsList;
