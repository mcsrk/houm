import React, { useEffect, useState } from "react";
import { Badge, Button, Image, Row, Tooltip, Typography } from "antd";
const { Text } = Typography;

const HeroCard = ({ songInfo }) => {
  const [authors, setAuthors] = useState([]);

  // useEffect(() => {
  //   let authorsArray = songInfo?.creators.items.map(({ name }) => name);
  //   setAuthors(authorsArray);
  // }, [songInfo]);

  const getImage = () => {
    let imageLink =
      "https://unnimedios.com.mx/wp-content/uploads/2021/11/Image-Not-Available.png";
    if (songInfo?.images.length !== 0) {
      imageLink =
        songInfo?.images[0].path + "." + songInfo?.images[0].extension;
    }
    return imageLink;
  };
  return (
    <div
      className="shadow-md rounded-md"
      style={{
        height: "456px",
        maxWidth: "350px",
        position: "relative",
      }}
    >
      <div className="w-full absolute">
        <Image src={getImage()} />
      </div>

      <div className="p-4 absolute bottom-0 bg-white w-full h-auto">
        <h2 className="text-xl font-semibold">
          {songInfo?.title ?? "Sin título"}
        </h2>

        <Text
          className="my-2 text-xs w-full text-gray-500"
          ellipsis={{ tooltip: authors.join(", ") }}
        >
          {authors.length
            ? "Autores: " + authors.join(", ")
            : "Sin autor(es) conocidos"}
        </Text>
        <br></br>

        <Row>
          <Tooltip placement="top" title={"Copia física"}>
            <Badge
              offset={[-20, -3]}
              style={songInfo?.prices[0].price === 0 ? {} : { display: "none" }}
              count={"Free"}
            >
              <Button type="primary" className="font-bold">
                {songInfo?.prices[0].price} vistas
              </Button>
            </Badge>
          </Tooltip>
          {songInfo?.prices.length === 2 && (
            <Tooltip placement="top" title={"Copia digital"}>
              <Button type="secondary">{songInfo?.prices[1].price} USD</Button>
            </Tooltip>
          )}
        </Row>
      </div>
    </div>
  );
};

export default HeroCard;
