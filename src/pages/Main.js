import { BackTop, Layout } from "antd";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/header/Header";
import Content from "../components/content/Content";
import Footer from "../components/footer/Footer";
import useWindowDimensions from "../utils/window";

const Main = ({ visibleDropdown, setVisibleDropdown }) => {
  const { height } = useWindowDimensions();

  return (
    <>
      <Layout
        style={{ minHeight: height }}
        onClick={() => {
          if (visibleDropdown) {
            setVisibleDropdown(false);
          }
        }}
      >
        <BackTop />
        <Header
          visibleDropdown={visibleDropdown}
          setVisibleDropdown={setVisibleDropdown}
        />
        <Switch>
          <Route path="/pasaportes" exact>
            <Content />
          </Route>

          <Redirect to="pasaportes" />
        </Switch>
        <Footer />
      </Layout>
    </>
  );
};

export default Main;
