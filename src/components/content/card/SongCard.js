import { useState, useEffect } from "react";
import { Row, Col, Tooltip, List } from "antd";
import { PlayCircleOutlined, MoreOutlined } from "@ant-design/icons";

// Utils
import { convertMsToMinSec } from "utils/utils";

const SongCard = ({ trackData }) => {
  const [track, setTrack] = useState({});

  useEffect(() => {
    
    const smallestAlbumImage = trackData?.albumOfTrack?.coverArt?.sources?.reduce(
      (smallest, image) => {
        if (image.height < smallest.height) return image;
        return smallest;
      },
      trackData?.albumOfTrack?.coverArt?.sources[0]
    ); 

    // Return natural language comma separated artists namelist linked to their profiles
    const tempArtist = trackData?.artists?.items?.map((creator, i, arr) => {
      return (
        <div
          key={"creator-last" + creator?.uri}
          className="cursor-pointer hover:underline"
          onClick={() => {
            window.location.replace(creator?.uri);
          }}
        >
          {creator?.profile.name}
          {i !== arr.length - 1 ? "," : ""}
        </div>
      );
    });  

    let trackInfo = {
      id:trackData?.id,
      name:trackData?.name,
      artists:tempArtist,
      duration:convertMsToMinSec(trackData?.duration?.totalMilliseconds),
      coverArt:smallestAlbumImage?.url,
      albumLink:trackData?.albumOfTrack?.uri,
      albumTitle:trackData?.albumOfTrack?.name,
      songLink:trackData?.uri,
    }
    setTrack(trackInfo)

  }, [trackData]);  
  
  return (
    <List.Item
      key={track.id}
      className="flex justify-center items-center bg-gray-50 shadow-sm rounded p-2 max-w-md hover:bg-gray-100 hover:shadow-md"
    >
      {/* thumbnail */}
      <Col span={4}>
        <Tooltip title={track.albumTitle} color={"#FF452B"}>
          <div
            onClick={() => window.location.replace(track.albumLink)}
            className="w-12 rounded-md border-2 border-solid border-transparent hover:border-houmPalette-primary cursor-pointer select-none"
          >
            <img
              className="object-cover w-full h-12 rounded-md"
              alt="single-cover"
              src={
                track.coverArt  ??
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
              }
            />
          </div>
        </Tooltip>
      </Col>
      {/* title & artists */}
      <Col span={12} className=" text-houmtxt-button">
        <Row>
          <div
            className="w-full text-left overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black hover:underline cursor-pointer hover:text-houmtxt-hover"
            onClick={() => window.location.replace(track.songLink)}
          >
            {track.name}
          </div>
        </Row>
        <Row className="text-sm w-full text-left overflow-hidden whitespace-nowrap overflow-ellipsis">
          {track.artists}
        </Row>
      </Col>
      {/* play button */}
      <Col span={3} className="flex justify-center items-center">
        <PlayCircleOutlined
          onClick={() => window.location.replace(track.songLink)}
          className=" text-lg hover:text-houmPalette-primary cursor-pointer select-none"
        />
      </Col>
      {/* duration */}
      <Col span={3} className="flex justify-center items-center">
        {track.duration}
      </Col>
      {/* details */}
      <Col span={2} className="flex justify-center items-center">
        <Tooltip title="extra info" color={"#FF452B"}>
          <MoreOutlined />
        </Tooltip>
      </Col>
    </List.Item>
  );
};

export default SongCard;
