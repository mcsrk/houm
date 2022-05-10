import { Col, Row } from "antd";

// Components
import GenericCard from "./GenericCard";

const renderArtistAvatar = (cover) => (
  <div className="mx-auto w-32 rounded-full shadow-sm border-2 border-solid border-transparent hover:border-houmPalette-primary hover:shadow-lg cursor-pointer select-none">
    <img
      className="object-cover w-full h-32 rounded-full"
      alt="artist-avatar"
      src={
        cover ??
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
      }
    />
  </div>
);

const renderArtistName = (name, link) => (
  <div
    className="text-center mx-auto overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black hover:underline cursor-pointer hover:text-houmtxt-hover"
    onClick={() => window.location.replace(link)}
  >
    {name}
  </div>
);
const renderLabel = (name) => (
  <div className="text-center w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
    {name}
  </div>
);

const ArtistCard = ({ artistData }) => {
  const id = artistData?.id;
  const name = artistData?.profile?.name;
  const uri = artistData?.uri;
  const sources = artistData?.visuals?.avatarImage?.sources;
  const avatar = sources ? sources[0]?.url : null;
  return (
    <GenericCard id={"artist-" + id}>
      <Col className="py-2">
        <Row>{renderArtistAvatar(avatar)}</Row>
        <Row>{renderArtistName(name, uri)}</Row>
        <Row>{renderLabel("Artista")}</Row>
      </Col>
    </GenericCard>
  );
};

export default ArtistCard;
