import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../../styles/header.css";

const { Header } = Layout;

const CustomHeader = ({ history, visibleDropdown, setVisibleDropdown }) => {
  const handleChangeDropdown = () => {
    setVisibleDropdown((prev) => !prev);
  };

  return (
    <Header
      className={"w-full z-1002 fixed flex justify-between bg-gray-900"}
      style={{
        boxShadow: `5px 5px 10px #c9cdd8,
                -5px -5px 10px #ffffff`,
      }}
    >
      <div className={"m-0 flex flex-row items-center"}>
        <div>{/* <img width="130px" src={logo} alt="logo" /> */}</div>
        <Menu
          theme="dark"
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
              <Menu mode="vertical" theme="dark">
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
          theme="dark"
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
