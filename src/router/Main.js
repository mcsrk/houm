import { BackTop, Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

import useWindowDimensions from "utils/window";
import Header from "components/header/Header";
import Content from "pages/Content";
import Footer from "components/footer/Footer";

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
          <Route path="/" exact>
            <Content />
          </Route>
          <Redirect to="" />
        </Switch>
        <Footer />
      </Layout>
    </>
  );
};

export default Main;
