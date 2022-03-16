import React from "react";
import { Route, Routes } from "react-router-dom";
import './scss/app.scss';

import { Header } from './components'
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart"  element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
