import React, { useState, useEffect } from "react";
import { Row, Col, Tooltip, List } from "antd";
import { PlayCircleOutlined, MoreOutlined } from "@ant-design/icons";
import { convertMsToMinSec } from "../../../utils/utils";

const SongCard = ({ trackData }) => {
  const [name, setName] = useState();
  const [artists, setArtists] = useState([]);
  const [duration, setDuration] = useState("0:00");

  const [albumLink, setAlbumLink] = useState(null);
  const [albumTitle, setAlbumTitle] = useState(null);
  const [songLink, setSongLink] = useState(null);

  useEffect(() => {
    setName(trackData?.name);
    setDuration(convertMsToMinSec(trackData?.duration?.totalMilliseconds));
    setAlbumLink(trackData?.albumOfTrack.uri);
    setAlbumTitle(trackData?.albumOfTrack.name);
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
          <img
            onClick={() => {
              window.location.replace(albumLink);
            }}
            className="rounded-md border-2 border-double border-transparent hover:border-houmPalette-orange cursor-pointer select-none"
            width="50px"
            alt="single-cover"
            src={
              "https://www.humonegro.com/wp-content/TAME-IMPALA-CURRENTS-BIG.png"
            }
          />
        </Tooltip>
      </Col>
      {/* title & artists */}
      <Col span={12} className=" text-houmtxt-button">
        <Row>
          <div
            className="font-bold text-black hover:underline cursor-pointer hover:text-houmtxt-hover"
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
          className=" text-lg hover:text-houmPalette-orange cursor-pointer select-none"
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
