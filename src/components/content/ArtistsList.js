import { useMemo } from "react";
import { List } from "antd";

// Components
import ArtistCard from "./card/ArtistCard";

const ArtistsList = ({ loading, artists }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="mx-auto mt-12 w-3/5 rounded-md shadow-lg  custom-list bg-white custom-list"
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
        dataSource={artists}
        renderItem={(artist) => <ArtistCard artistData={artist.data} />}
      />
    ),
    [loading, artists]
  );
};

export default ArtistsList;
