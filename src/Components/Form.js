import React from "react";
import '../App.css'

export default function PizzaForm(props) {

const { submit, change } = props

const onSubmit = e => {
    e.preventDefault()
    submit()
}
const onChange = e => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
}

return (

    <form className='form container' id='pizza-form' onSubmit='{onSubmit}'>
        <div className='pizza-header'>
            <h1>Build your own Pizza!</h1>
        </div>
        <div>
            <h3>Who is this pizza for?</h3>
            <input name='name' type='text' id='name-input' placeholder='Your name here!'/>
        </div>
        <div>
            <h2>Create your pizza using the following options!</h2>
        </div>
        <div>
            <h3>How big do you want your pizza?</h3>
            <select id='size-dropdown' name='size' value=''>
                <option>-- Select a size --</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
            </select>
        </div>
        <div>
            <h3>Sauce this thing up!</h3>
            <input type='radio' value='marinara' name='sauce' />Classic Marinara
            <input type='radio' value='alfredo' name='sauce' />Creamy Alfredo
            <input type='radio' value='bbq' name='sauce' />Tangy Barbecue
        </div>
        <div>
            <h3>Load it up with toppings!</h3>
            <input type='checkbox' name='banana_peppers' onChange={onChange} checked=''/>Banana Peppers
            <input type='checkbox' name='green_olive' onChange={onChange} checked=''/>Green Olives
            <input type='checkbox' name='onion' onChange={onChange} checked=''/>Onions
            <input type='checkbox' name='pineapple' onChange={onChange} checked=''/>Pineapple
            <input type='checkbox' name='mushrooms' onChange={onChange} checked=''/>Mushrooms
        </div>
        <div>
           <h3>Special Instructions for the Chef!</h3> 
           <input type='text' value='' id='special-text' placeholder='(Optional)' name='special_text'/>
        </div>
        <div>
            <h1>Place your order!</h1>
            <button id='order-button'>Add to Order!</button>
        </div>
    </form>

)


}