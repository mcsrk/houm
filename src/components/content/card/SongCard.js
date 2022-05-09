import React, { useState, useEffect } from "react";
import { Row, Col, Tooltip, List } from "antd";
import { PlayCircleOutlined, MoreOutlined } from "@ant-design/icons";
import { convertMsToMinSec } from "../../../utils/utils";

const SongCard = ({ trackData }) => {
  const [name, setName] = useState();
  const [artists, setArtists] = useState([]);
  const [duration, setDuration] = useState("0:00");
  const [coverArt, setCoverArt] = useState(null);

  const [albumLink, setAlbumLink] = useState(null);
  const [albumTitle, setAlbumTitle] = useState(null);
  const [songLink, setSongLink] = useState(null);

  useEffect(() => {
    setName(trackData?.name);
    setDuration(convertMsToMinSec(trackData?.duration?.totalMilliseconds));
    setAlbumLink(trackData?.albumOfTrack.uri);
    setAlbumTitle(trackData?.albumOfTrack.name);
    const smallestAlbumImage = trackData?.albumOfTrack.coverArt.sources.reduce(
      (smallest, image) => {
        if (image.height < smallest.height) return image;
        return smallest;
      },
      trackData?.albumOfTrack.coverArt.sources[0]
    );
    setCoverArt(smallestAlbumImage);
    setSongLink(trackData?.uri);

    // Return natural language comma separated artists namelist linked to their profiles
    const tempArtist = trackData?.artists.items.map((creator, i, arr) => {
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
    setArtists(tempArtist);
  }, [trackData]);
  return (
    <List.Item
      key={trackData?.id}
      className="flex justify-center items-center bg-gray-50 shadow-sm rounded p-2 max-w-md hover:bg-gray-100 hover:shadow-md"
    >
      {/* thumbnail */}
      <Col span={4}>
        <Tooltip title={albumTitle} color={"#FF452B"}>
          <div
            onClick={() => {
              window.location.replace(albumLink);
            }}
            className="w-12 rounded-md border-2 border-solid border-transparent hover:border-houmPalette-primary cursor-pointer select-none"
          >
            <img
              className="object-cover w-full h-12 rounded-md"
              alt="single-cover"
              src={
                coverArt?.url ??
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
            onClick={() => {
              window.location.replace(songLink);
            }}
          >
            {name}
          </div>
        </Row>
        <Row className="text-sm">{artists}</Row>
      </Col>
      {/* play button */}
      <Col span={3} className="flex justify-center items-center">
        <PlayCircleOutlined
          onClick={() => {
            window.location.replace(songLink);
          }}
          className=" text-lg hover:text-houmPalette-primary cursor-pointer select-none"
        />
      </Col>
      {/* duration */}
      <Col span={3} className="flex justify-center items-center">
        {duration}
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
