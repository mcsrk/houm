import React from "react";
import { Col, Divider, Layout, Row } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  LinkedinFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { default as logo } from "../../assets/img/grayLogo.svg";
const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer classNameName={"bg-white"}>
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
                  experiencia de arrendar, comprar o vender una propiedad algo
                  simple y agradable.
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Row>
              <Col xs={24} md={6} lg={6} className="p-3 mb-4 mb-lg-0">
                <h6 className="font-extrabold mb-4  ">Navega en Houm</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Publica para arrendar
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Publica para vender
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Invierte
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      ¡Refiere y gana!
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      ¿Quiénes somos?
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Calcular arriendo o venta
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Simulador de crédito
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-4 mb-lg-0">
                <h6 className="font-extrabold mb-4  ">Trabaja en Houm</h6>
                <ul className="list-none mb-0">
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Sé un Houmer mostrador
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Sé un Houmer fotógrafo
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Únete a nuestro team
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-lg-0">
                <h6 className="font-extrabold mb-4  ">Acerca de Houm</h6>
                <ul className="list-none mb-0">
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      El blog de Houm
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Nuestros Houmers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Términos y Condiciones
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      Política de privacidad
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={24} md={6} lg={6} className="p-3 mb-lg-0">
                <h6 className="font-extrabold mb-4">Contáctanos</h6>
                <ul className="list-none mb-0">
                  <li className="mb-2">
                    <a
                      href="mailto:ayuda@houm.com"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      ayuda@houm.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://houm.com/co"
                      className="text-muted"
                      rel="noreferrer"
                    >
                      <WhatsAppOutlined /> WhatsApp
                    </a>
                  </li>
                </ul>
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
            <Col>
              <p className="text-muted mb-0 py-2"></p>
              <ul className="mt-4 text-4xl">
                <li className="inline m-2">
                  <a
                    href="https://www.facebook.com/houm.co"
                    target="_blank"
                    title="facebook"
                    rel="noreferrer"
                  >
                    <FacebookFilled />
                  </a>
                </li>
                <li className="inline m-2">
                  <a
                    href="https://www.instagram.com/houm_co/"
                    target="_blank"
                    title="facebook"
                    rel="noreferrer"
                  >
                    <InstagramFilled />
                  </a>
                </li>
                <li className="inline m-2">
                  <a
                    href="https://www.linkedin.com/company/houm-com/"
                    target="_blank"
                    title="facebook"
                    rel="noreferrer"
                  >
                    <LinkedinFilled />
                  </a>
                </li>
                <li className="inline m-2">
                  <a
                    href="https://twitter.com/HoumLatam"
                    target="_blank"
                    title="facebook"
                    rel="noreferrer"
                  >
                    <TwitterCircleFilled />
                  </a>
                </li>
                <li className="inline m-2">
                  <a
                    href="https://www.youtube.com/channel/UCDNDrxY5zs2MfKc87SbFmIA"
                    target="_blank"
                    title="facebook"
                    rel="noreferrer"
                  >
                    <YoutubeFilled />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
