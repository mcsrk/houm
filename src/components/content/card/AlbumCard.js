import { Col, Row } from "antd";

// Utils
import { getBiggestAlbumImage } from "utils/utils";

// Utils
import { renderArtists } from "utils/utils";

// Components
import GenericCard from "./GenericCard";

const renderAlbumAvatar = (cover, link) => (
  <div
    className="w-32 rounded-md border-2 border-solid border-transparent hover:border-houmPalette-primary cursor-pointer select-none"
    onClick={() => window.location.replace(link)}
  >
    <img
      className="object-cover w-full h-32 rounded-md"
      alt="album-avatar"
      src={
        cover ??
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
      }
    />
  </div>
);

const renderAlbumName = (name, link) => (
  <div
    className="w-full text-left overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black hover:underline cursor-pointer hover:text-houmtxt-hover"
    onClick={() => window.location.replace(link)}
  >
    {name}
  </div>
);
const renderAlbumDate = (date) => (
  <div className="text-houmtxt-button">{date}</div>
);

const AlbumCard = ({ albumData }) => {
  const image = getBiggestAlbumImage(albumData?.coverArt?.sources);
  const artists = renderArtists(albumData?.artists?.items);
  const date = albumData?.date?.year;
  const name = albumData?.name;
  const link = albumData?.uri;
  return (
    <GenericCard id={"album-" + link}>
      <Col className="py-2">
        <Row>{renderAlbumAvatar(image?.url, link)}</Row>
        <Row>{renderAlbumName(name, link)}</Row>
        <Row>{artists}</Row>
        <Row>{renderAlbumDate(date)}</Row>
      </Col>
    </GenericCard>
  );
};

export default AlbumCard;
