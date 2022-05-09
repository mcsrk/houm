import { List } from "antd";
import React from "react";
import SongCard from "./card/SongCard";

const SongsList = ({ loading, tracks }) => {
  return (
    <List
      loading={loading}
      className="mx-auto rounded-md shadow-lg max-w-md"
      size="small"
      dataSource={tracks}
      renderItem={(track) => <SongCard trackData={track.data} />}
    />
  );
};

export default SongsList;
