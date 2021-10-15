import React from "react";
import '../App.css'

export default function PizzaForm(props) {

const { values, submit, change, disabled, errors } = props

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

    <form className='form container' id='pizza-form' onSubmit={onSubmit}>
        <div className='pizza-header'>
            <h1>Build your own Pizza!</h1>
        </div>
        <div>
            <h3>Who is this pizza for?</h3>
            <input name='name' type='text' id='name-input' placeholder='Your name here!' value={values.name} onChange={onChange}/>
        </div>
        <div>
            <h2>Create your pizza using the following options!</h2>
        </div>
        <div>
            <h3>How big do you want your pizza?</h3>
            <select id='size-dropdown' name='size' value={values.size} onChange={onChange}>
                <option value=''>-- Select a size --</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='extra_large'>Extra Large</option>
            </select>
        </div>
        <div>
            <h3>Sauce this thing up!</h3>
            <input type='radio' value='marinara' name='sauce' onChange={onChange} checked={values.sauce === 'marinara'}/>Classic Marinara
            <input type='radio' value='alfredo' name='sauce' onChange={onChange} checked={values.sauce === 'alfredo'}/>Creamy Alfredo
            <input type='radio' value='bbq' name='sauce' onChange={onChange} checked={values.sauce === 'bbq'}/>Tangy Barbecue
        </div>
        <div>
            <h3>Load it up with toppings!</h3>
            <input type='checkbox' name='banana_peppers' onChange={onChange} checked={values.banana_peppers}/>Banana Peppers
            <input type='checkbox' name='green_olives' onChange={onChange} checked={values.green_olives}/>Green Olives
            <input type='checkbox' name='onions' onChange={onChange} checked={values.onions}/>Onions
            <input type='checkbox' name='pineapple' onChange={onChange} checked={values.pineapple}/>Pineapple
            <input type='checkbox' name='mushrooms' onChange={onChange} checked={values.mushrooms}/>Mushrooms
        </div>
        <div>
           <h3>Special Instructions for the Chef!</h3> 
           <input name='special_text' type='text' id='special-text' value={values.special_text}  placeholder='(Optional)'  onChange={onChange}/>
        </div>
        <div>
            <h1>Place your order!</h1>
            <button id='order-button' disabled={disabled} >Add to Order!</button>
        </div>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.sauce}</div>
          <div>{errors.size}</div>
          <div>{errors.special_text}</div>
        </div>
    </form>

)


}