import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { default as logoHeader } from "../../assets/img/houmLogo.svg";

import "../../styles/header.css";

const { Header } = Layout;

const CustomHeader = ({ history, visibleDropdown, setVisibleDropdown }) => {
  const handleChangeDropdown = () => {
    setVisibleDropdown((prev) => !prev);
  };

  return (
    <Header
      className={"w-full z-1002 fixed flex justify-between bg-white"}
      style={{
        boxShadow: `rgba(38, 50, 56, 0.15) 0px 4px 15px`,
      }}
    >
      <div className={"m-0 flex flex-row items-center"}>
        <div>
          <img width="90px" src={logoHeader} alt="logo" />
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[history.location.pathname]}
          className={"ml-20"}
          style={{
            lineHeight: "64px",
          }}
        >
          <Menu.Item key="/">
            <Link to="/">Propietarios</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className={"m-0 flex flex-row items-center"}>
        <Dropdown
          overlay={
            <>
              <Menu mode="vertical">
                <Menu.Item>Hola</Menu.Item>
                <Menu.Item>Como vas</Menu.Item>
                <Menu.Item>Adios</Menu.Item>
              </Menu>
            </>
          }
          visible={visibleDropdown}
          overlayClassName="overlay-menu-header"
        >
          <span className="menu-header" onClick={handleChangeDropdown}>
            Más de Houm
          </span>
        </Dropdown>
      </div>
      <div className={"m-0 flex flex-row items-center"}>
        <Menu
          mode="horizontal"
          selectedKeys={[history.location.pathname]}
          className={"ml-20"}
          style={{
            lineHeight: "64px",
          }}
        >
          <Menu.Item key="/">
            <Link to="/">Inicia sesión</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default withRouter(CustomHeader);
