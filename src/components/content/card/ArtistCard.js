import { Col, List, Row } from "antd";

const ArtistCard = ({ artistData }) => {
  return (
    <List.Item
      key={"artist-" + artistData?.id}
      className="flex justify-center items-center bg-gray-50 shadow-sm rounded p-2 max-w-md hover:bg-gray-100 hover:shadow-md"
    >
      <Col>
        <Row>
          <div className="w-32 rounded-md border-2 border-solid border-transparent hover:border-houmPalette-primary cursor-pointer select-none">
            <img
              className="object-cover w-full h-32 rounded-md"
              alt="artist-avatar"
              src={
                artistData?.visuals.avatarImage.sources[0].url ??
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
              }
            />
          </div>
        </Row>
        <Row>
          <div
            className="w-full text-left overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black hover:underline cursor-pointer hover:text-houmtxt-hover"
            onClick={() => {
              window.location.replace(artistData?.uri);
            }}
          >
            {artistData?.profile.name}
          </div>{" "}
        </Row>
        <Row>Artista</Row>
      </Col>
    </List.Item>
  );
};

export default ArtistCard;
