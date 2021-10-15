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

const initialPizzas = []

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizzas, setPizzas] = useState(initialPizzas)

  const change = (name, value) => {
    setFormValues({ ...formValues, [name]: value})
  }
  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['banana_peppers', 'green_olives', 'onions', 'pineapple', 'mushrooms'].filter(topping => !!formValues[topping]),
      special_text: formValues.special_text
    }
    orderPizza(newPizza);
  }
  const orderPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        setPizzas([res.data, ...pizzas]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues)
      })
  }
  
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
        <PizzaForm 
          values={formValues} 
          submit={submit} 
          change={change}
        />
      </Route>
    </>
  );
};
export default App;
