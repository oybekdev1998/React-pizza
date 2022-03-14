import React, { useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import './scss/app.scss';

import { setPizzas } from './redux/actions/pizzas'

import { Header } from './components'
import Home from "./pages/Home";
import Cart from "./pages/Cart";



function App() {
  // const [pizza, setPizza] = useState()
  // useEffect(() => {
    //   axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => setPizza(data))
    // }, [])
    
    
    
    // fetch('http://localhost:3000/db.json')
    // .then(response => response.json())
    // .then(json => console.log(json.pizzas))
    
    
  const { items } = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items,
      sortBy: pizzas.sortBy,
    }
  })
    
  const dispatch = useDispatch()
    
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => { 
      dispatch(setPizzas(data.pizzas))
    })
  }, [dispatch])
  
  

  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home items={items} />} />
          <Route path="/cart"  element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
