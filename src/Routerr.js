import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Middle from "./Middle";
import Middle2 from "./Middle2";
import Middle3 from "./Middle3";
import Freq from "./Freq";
import Footer from "./Footer";
import Header from "./Header";

function Routerr() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Middle />
                <Middle2 />
                <Middle3 />
                <Freq />
                <Footer />
              </>
            }
          />
          <Route path="home" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routerr;
