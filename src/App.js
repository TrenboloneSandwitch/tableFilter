import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { TableDataProvider } from "./context/TableDataContext";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import Table from "./components/common/Table";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return (
    <TableDataProvider>
      <h1
        className="d-flex justify-content-center p-5 bg-dark text-white"
        style={{ margin: "0", fontWeight: 100 }}
      >
        The Table Filter
      </h1>
      <Filters />
      <Table />
      <Footer />
    </TableDataProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
