import { useMemo } from "react";
import { List } from "antd";

// Components
import AlbumCard from "./card/AlbumCard";

const AlbumsList = ({ loading, albums }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="mx-auto mt-12 w-3/5 max-w-max rounded-md shadow-lg bg-white custom-list"
        size="small"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={albums}
        renderItem={(album) => <AlbumCard albumData={album.data} />}
      />
    ),
    [loading, albums]
  );
};

export default AlbumsList;
