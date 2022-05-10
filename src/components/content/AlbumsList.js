import { useMemo } from "react";
import { List } from "antd";

// Components
import AlbumCard from "./card/AlbumCard";

const AlbumsList = ({ loading, albums }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="mx-auto max-w-max rounded-md shadow-lg mt-12"
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
