import { useMemo } from "react";
import { List } from "antd";

// Components
import ArtistCard from "./card/ArtistCard";

const ArtistsList = ({ loading, artists }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="mx-auto w-full rounded-md shadow-lg mt-12"
        size="small"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={artists}
        renderItem={(artist) => <ArtistCard artistData={artist.data} />}
      />
    ),
    [loading, artists]
  );
};

export default ArtistsList;
