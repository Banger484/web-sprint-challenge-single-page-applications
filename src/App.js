/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PizzaForm from "./Components/Form";
import { Route, Link} from 'react-router-dom'
import axios from "axios";

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  banana_peppers: false,
  green_olives: false,
  onions: false,
  pineapple: false,
  mushrooms: false,
  special_text: ''
}

const App = () => {
  const [formValues, setFormValues] = useState();

  return (
    <>
      <div className='header'> 
        <h1>Lambda Eats</h1>
        <div className='top-nav'>
          <Link to={`/`}>
            <button>Home</button>
          </Link>
          <Link to={`/pizza`}>
            <button id='order-pizza'>Order a Pizza!</button>
          </Link>
        </div>
      </div>
      
      <Route path='/pizza'>
        <PizzaForm />
      </Route>
    </>
  );
};
export default App;
