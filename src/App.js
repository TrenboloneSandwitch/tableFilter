import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import data from "./store/data.json";
import getJSON from "./services/api.service";

import Footer from "./components/Footer";

const App = () => {
  const [state, setstate] = useState(null);
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <h1>Tu kabel</h1>
      <h2>HUHU</h2>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
