import { useMemo } from "react";
import { List } from "antd";

// Components
import AlbumCard from "./card/AlbumCard";

const AlbumsList = ({ loading, albums }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="w-full m-auto rounded-md shadow-lg"
        size="small"
        grid={{ gutter: 16, column: 4 }}
        dataSource={albums}
        renderItem={(album) => <AlbumCard albumData={album.data} />}
      />
    ),
    [loading, albums]
  );
};

export default AlbumsList;
