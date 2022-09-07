import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as RoutesChildrem,
} from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Routes = () => (
  <BrowserRouter basename="react-multiples">
    <RoutesChildrem>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </RoutesChildrem>
  </BrowserRouter>
);

export default Routes;
