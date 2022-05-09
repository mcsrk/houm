import React from "react";
import { Col, Divider, Layout, Row } from "antd";
import {
  LinkedinFilled,
  WhatsAppOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import { default as logo } from "../../assets/img/grayLogo.svg";

const { Footer } = Layout;

const mediaInfo = [
  {
    link: "https://www.linkedin.com/in/jhon-acosta-48595314b/",
    icon: <LinkedinFilled />,
  },
  {
    link: "https://github.com/mcsrk",
    icon: <GithubOutlined />,
  },
];
const companyList = {
  title: "Compañía",
  children: [
    {
      link: "https://www.spotify.com/bo/about-us/contact/",
      label: "Acerca de",
    },
    {
      link: "https://www.lifeatspotify.com/",
      label: "Empleo",
    },
  ],
};
const communityList = {
  title: "Comunidad",
  children: [
    {
      label: "Para artistas",
      link: "https://artists.spotify.com/",
    },
    {
      label: "Desarrolladores",
      link: "https://developer.spotify.com/",
    },
    {
      label: "Inversionistas",
      link: "https://investors.spotify.com/",
    },
  ],
};
const helpList = {
  title: "Enlaces útiles",
  children: [
    {
      label: "Ayuda",
      link: "https://support.spotify.com/",
    },
  ],
};
const contactList = {
  title: "Contáctanos",
  children: [
    {
      label: "ayuda@houm.com",
      link: "mailto:ayuda@houm.com/",
    },
    {
      label: "WhatsApp",
      link: "https://whatsapp.com/",
      icon: <WhatsAppOutlined />,
    },
  ],
};

const SocialMediaList = (list) => {
  return (
    <ul className="mt-4 text-4xl">
      {list.map((ele) => {
        return (
          <li className="inline m-2" key={"li-" + ele.link}>
            <a
              key={"a-" + ele.link}
              href={ele.link}
              className="text-muted hover:text-houmPalette-primary"
              rel="noreferrer"
            >
              {ele.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const SectionsList = (list) => {
  return (
    <>
      <h6 className="font-extrabold mb-4" key={list.title}>
        {list.title}
      </h6>
      <ul className="list-unstyled mb-0">
        {list?.children.map((ele) => {
          return (
            <li className="mb-2" key={list.tilte + "li-" + ele.link}>
              <a
                key={"a-" + ele.link}
                href={ele.link ?? "#"}
                className="text-muted hover:text-houmtxt-hover"
                rel="noreferrer"
              >
                {ele?.icon}
                {ele.label ?? "-"}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const CustomFooter = () => {
  return (
    <Footer className={"bg-white"}>
      {/*  Footer  */}

      <div className="container">
        <Row className="p-4">
          <img src={logo} alt="Logo Houm" width={180} />
        </Row>
        <Row className="w-full break-word text-gray-600">
          <Col span={10}>
            <Row>
              <Col xs={24} md={6} lg={15} className="p-3 mb-lg-0">
                <p className="text-base max-w-sm  ">
                  En Houm usamos la tecnología y el diseño para hacer de la
                  experiencia de descubrir música algo simple y agradable.
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Row>
              <Col xs={24} md={6} lg={6} className="p-3 mb-4 mb-lg-0">
                {SectionsList(companyList)}
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-4 mb-lg-0">
                {SectionsList(communityList)}
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-lg-0">
                {SectionsList(helpList)}
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-lg-0">
                {SectionsList(contactList)}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Divider />
      {/*   Addreess and Social-media  */}
      <div className="bg-light py-4">
        <div className="container text-center">
          <Row className="justify-between">
            <Col>
              <p className="text-xs py-2">
                Calle 103 #19-60, Bogotá, Cundinamarca, Colombia
              </p>
            </Col>
            <Col>{SocialMediaList(mediaInfo)}</Col>
          </Row>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
