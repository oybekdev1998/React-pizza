import React from "react";

import './scss/app.scss';

import { Header } from './components'

import Home from "./pages/Home";



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
