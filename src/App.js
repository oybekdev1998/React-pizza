import React, { useEffect, useState } from "react";
import axios from "axios";

import './scss/app.scss';

import { Header } from './components'

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";



function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => setPizzas(data.pizzas))
  }, [])

  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home items={pizzas} />} />
          <Route path="/cart"  element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
