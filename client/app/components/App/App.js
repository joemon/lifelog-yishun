import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home"
import Button from "@material-ui/core/Button";
import { renderComponent } from "recompose";

const App = ({ children }) => (
  <div>
    <Header />
    <div className="content">
      <main className="main-view">{children}</main>
    </div>
    <Footer />
  </div>
);

export default App;



