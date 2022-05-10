
import { useMemo } from "react";
import { List } from "antd";

import ArtistCard from "./card/ArtistCard";

const ArtistsList = ({ loading, artists }) => {
 
  return useMemo(
    ()=>(<List
      loading={loading}
      className="mx-auto rounded-md shadow-lg max-w-md"
      size="small"
      grid={{ gutter: 16, column: 4 }}
      dataSource={artists}
      renderItem={(artist) => <ArtistCard artistData={artist.data} />}
    />),[loading, artists]
  );
};

export default ArtistsList;
