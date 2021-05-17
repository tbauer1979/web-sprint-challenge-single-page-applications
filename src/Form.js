import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link} from "react-router-dom"

const Form = (props) => {


  return (
    <div className="form" id="pizza-form"><h1>Build Your Own Pizza</h1>
<form onSubmit={props.formSubmit}>
        <div className="instructions">
            <h2>Name on Order</h2>
            <div className="instructions" >
                <input name="name" type="text"   size="30" placeholder="Full name" onChange={props.inputChange}/><br />
                <input name="phone" type="text" size="30" placeholder="Phone number"  onChange={props.inputChange}/>
            </div>
        </div>


   {/* SIZE OF PIZZA */}
        <div className="size">
            <h2>Choice of Size</h2>
            <p>Required</p>
            <select name="size" id="sizeofpizza" onChange={props.inputChange}> 
                <option value="small" >Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xlarge">xlarge</option>
            </select>
        </div>

   {/* SIZE OF PIZZA */}
        <div className="sauce">
            <h2>Choice of Sauce</h2>
            <p>Required</p>

            <div>
                <div >
                    <input name="sauce" type="radio" value="original" onChange={props.inputChange}/>Original Red
                    <input name="sauce" type="radio"  value="garlic" onChange={props.inputChange}/>Garlic Ranch
                    <input name="sauce" type="radio" value="bbq"  onChange={props.inputChange}/>BBQ Sauce
                    <input name="sauce" type="radio" value="spinach" onChange={props.inputChange} />Spinach Alfredo
                </div>
                </div>
        </div>

   {/* Add Toppings */}
   <div>
            <h2>Add Toppings</h2>
            <p>Choose up to 10</p>
            <div  className="toppings">
                   <div className="topping"> <input name="toppings" type="checkbox" value="Pepperoni" onChange={props.inputChange}/>Pepperoni
                    <input className="topping"name="toppings" type="checkbox" value="Sausage" onChange={props.inputChange}/>Sausage
                    <input name="toppings" type="checkbox" value="Canadian Bacon" onChange={props.inputChange}/>Canadian Bacon
                    <input name="toppings" type="checkbox" value="Spicy Italian Sausage" onChange={props.inputChange}/>Spicy Italian Sausage
                    <input name="toppings" type="checkbox" value="Grilled Chicken" onChange={props.inputChange}/>Grilled Chicken
                    <input name="toppings" type="checkbox" value="Onions" />Onions
                    <input name="toppings" type="checkbox" value="Green Pepper" onChange={props.inputChange}/>Green Pepper</div>
                    <div className="topping"><input name="toppings" type="checkbox" value="Diced tomatos" onChange={props.inputChange}/>Diced Tomatos
                    <input name="toppings" type="checkbox" value="Black Olives" onChange={props.inputChange}/>Black Olives
                    <input name="toppings" type="checkbox" value="Roasted Garlic" onChange={props.inputChange}/>Roasted Garlic
                    <input name="toppings" type="checkbox" value="Artichoke Hearts" onChange={props.inputChange}/>Artichoke Hearts
                    <input name="toppings" type="checkbox" value="Three Cheese" onChange={props.inputChange}/>Three Cheese
                    <input name="toppings" type="checkbox" value="Pineapple" onChange={props.inputChange}/>Pineapple
                    <input name="toppings" type="checkbox" value="Extra Cheese" onChange={props.inputChange}/>Extra Cheese</div>
                </div>
        </div>


          {/* choice of substitute */}
          <div className="substitute">
            <h2>Choice of Substitute</h2>
            <p>Choose up to 1</p>
            <input name="substitute" type="checkbox" value="gluten" onChange={props.inputChange}/>Gluten Free (= $1.00)
            
        </div>



        {/* special instructions */}
        <div className="instructions">
            <h2>Special Instructions</h2>
                <input name="instructions" type="text" value={props.instructions} size="60" placeholder="Anything you would like to add?" onChange={props.inputChange}/>
            
        </div>
        <button onSubmit={props.formSubmit}>Save Order</button> <br />    
        <Link to="/complete">Place Order</Link> 

            
        </form>
    </div>
  );
};
export default Form;

