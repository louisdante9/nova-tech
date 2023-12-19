import React, { useLayoutEffect } from "react";


import { Nav } from "./component/Nav/Nav";
import { Header } from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";
import {Content} from "./component/Content/Content";
import "./App.css";


function App() {
  useLayoutEffect(() => {
    setTimeout(() => {
      let body = document.body;
      body?.classList.add("loaded");
    }, 1000);
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <Content/>
      <Footer />
    </>
  );
}

export default App;
