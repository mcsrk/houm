import { useMemo } from "react";
import { List } from "antd";

// Components
import ArtistCard from "./card/ArtistCard";

const ArtistsList = ({ loading, artists }) => {
  return useMemo(
    () => (
      <List
        loading={loading}
        className="w-full m-auto rounded-md shadow-lg"
        size="small"
        grid={{ gutter: 16, column: 4 }}
        dataSource={artists}
        renderItem={(artist) => <ArtistCard artistData={artist.data} />}
      />
    ),
    [loading, artists]
  );
};

export default ArtistsList;
