import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../Router/Router";

const LayOut = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default LayOut;
