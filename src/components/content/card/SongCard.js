import { Row, Col, Tooltip } from "antd";
import { PlayCircleOutlined, MoreOutlined } from "@ant-design/icons";

// Utils
import {
  convertMsToMinSec,
  renderArtists,
  getSmallestAlbumImage,
} from "utils/utils";

// Components
import GenericCard from "./GenericCard";

const renderAlbumAvatar = (cover, albumTitle, albumLink) => (
  <Tooltip title={albumTitle} color={"#FF452B"}>
    <div
      onClick={() => window.location.replace(albumLink)}
      className="w-12 rounded-md border-2 border-solid border-transparent hover:border-houmPalette-primary cursor-pointer select-none"
    >
      <img
        className="object-cover w-full h-12 rounded-md"
        alt="single-cover"
        src={
          cover ??
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        }
      />
    </div>
  </Tooltip>
);

const renderTrackName = (name, link) => (
  <div
    className="w-full text-left overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black hover:underline cursor-pointer hover:text-houmtxt-hover"
    onClick={() => window.location.replace(link)}
  >
    {name}
  </div>
);

const SongCard = ({ trackData }) => {
  const sources = trackData?.albumOfTrack?.coverArt?.sources;
  const image = getSmallestAlbumImage(sources);
  const artists = renderArtists(trackData?.artists?.items);
  const id = trackData?.id;
  const name = trackData?.name;
  const duration = convertMsToMinSec(trackData?.duration?.totalMilliseconds);
  const albumLink = trackData?.albumOfTrack?.uri;
  const albumTitle = trackData?.albumOfTrack?.name;
  const songLink = trackData?.uri;

  return (
    <GenericCard id={"track-" + id}>
      {/* thumbnail */}
      <Col span={4}>{renderAlbumAvatar(image?.url, albumTitle, albumLink)}</Col>
      {/* title & artists */}
      <Col span={12} className=" text-houmtxt-button">
        <Row>{renderTrackName(name, songLink)}</Row>
        <Row className="text-sm w-full text-left overflow-hidden whitespace-nowrap overflow-ellipsis">
          {artists}
        </Row>
      </Col>
      {/* play button */}
      <Col span={3} className="flex justify-center items-center">
        <PlayCircleOutlined
          onClick={() => window.location.replace(songLink)}
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
    </GenericCard>
  );
};

export default SongCard;
