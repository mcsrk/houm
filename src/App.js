import React, { useState } from "react";
import { Layout, ConfigProvider } from "antd";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import es_ES from "antd/es/locale/es_ES";

import useWindowDimensions from "./utils/window";
import Main from "./router/Main";

const App = () => {
  const { height } = useWindowDimensions();
  const [visibleDropdown, setVisibleDropdown] = useState(false);

  return (
    <Router>
      <Redirect to="/" />
      <ConfigProvider locale={es_ES}>
        <Layout
          style={{ minHeight: height }}
          onClick={() => {
            if (visibleDropdown) {
              setVisibleDropdown(false);
            }
          }}
        >
          <Main
            visibleDropdown={visibleDropdown}
            setVisibleDropdown={setVisibleDropdown}
          />
        </Layout>
      </ConfigProvider>
    </Router>
  );
};

export default App;
