import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link} from "react-router-dom"

const Form = (props) => {


  return (
    <div className="form" id="pizza-form"><h1>Build Your Own Pizza</h1>
<form onSubmit={props.handleSubmit}>
        <div className="instructions">
            <h2>Name on Order</h2>
            <div className="instructions" >
                <input name="name" type="text"   size="30" placeholder="Full name" onChange={props.handleClickCustomer}/><br />
                <input name="address" type="text"  size="30" placeholder="Address"  onChange={props.handleClickCustomer}/><br />
                <input name="phone" type="text" size="30" placeholder="Phone number"  onChange={props.handleClickCustomer}/>
            </div>
        </div>


   {/* SIZE OF PIZZA */}
        <div className="size">
            <h2>Choice of Size</h2>
            <p>Required</p>
            <select name="size" id="sizeofpizza" onChange={props.handleClickSize}> 
                <option value="small" onClick={props.handleClickSize}>Small</option>
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
                    <input name="sauce" type="radio" value="original" onChange={props.handleClickSauce}/>Original Red
                    <input name="sauce" type="radio"  value="garlic" onChange={props.handleClickSauce}/>Garlic Ranch
                    <input name="sauce" type="radio" value="bbq"  onChange={props.handleClickSauce}/>BBQ Sauce
                    <input name="sauce" type="radio" value="spinach" onChange={props.handleClickSauce} />Spinach Alfredo
                </div>
                </div>
        </div>

   {/* Add Toppings */}
   <div className="toppings">
            <h2>Add Toppings</h2>
            <p>Choose up to 10</p>
            <div>
                
                    <input name="Pepperoni" type="checkbox" value="Pepperoni" onChange={props.handleClickToppings}/>Pepperoni
                    <input name="Sausage" type="checkbox" value="Sausage" onChange={props.handleClickToppings}/>Sausage
                    <input name="Canadian Bacon" type="checkbox" value="Canadian Bacon" onChange={props.handleClickToppings}/>Canadian Bacon
                    <input name="Spicy Italian Sausage" type="checkbox" value="Spicy Italian Sausage" onChange={props.handleClickToppings}/>Spicy Italian Sausage
                    <input name="Grilled Chicken" type="checkbox" value="Grilled Chicken" onChange={props.handleClickToppings}/>Grilled Chicken
                    <input name="Onions" type="checkbox" value="Onions" />Onions
                    <input name="Green Pepper" type="checkbox" value="Green Pepper" onChange={props.handleClickToppings}/>Green Pepper
                    <input name="Diced tomatos" type="checkbox" value="Diced tomatos" onChange={props.handleClickToppings}/>Diced Tomatos
                    <input name="Black Olives" type="checkbox" value="Black Olives" onChange={props.handleClickToppings}/>Black Olives
                    <input name="Roasted Garlic" type="checkbox" value="Roasted Garlic" onChange={props.handleClickToppings}/>Roasted Garlic
                    <input name="Artichoke Hearts" type="checkbox" value="Artichoke Hearts" onChange={props.handleClickToppings}/>Artichoke Hearts
                    <input name="Three Cheese" type="checkbox" value="Three Cheese" onChange={props.handleClickToppings}/>Three Cheese
                    <input name="Pineapple" type="checkbox" value="Pineapple" onChange={props.handleClickToppings}/>Pineapple
                    <input name="Extra Cheese" type="checkbox" value="Extra Cheese" onChange={props.handleClickToppings}/>Extra Cheese
                
                </div>
        </div>


          {/* choice of substitute */}
          <div className="substitute">
            <h2>Choice of Substitute</h2>
            <p>Choose up to 1</p>
            <input name="substitute" type="checkbox" value="gluten" onChange={props.handleClickGluten}/>Gluten Free (= $1.00)
            
        </div>



        {/* special instructions */}
        <div className="instructions">
            <h2>Special Instructions</h2>
                <input name="instructions" type="text" value={props.instructions} size="60" placeholder="Anything you would like to add?" onChange={props.handleClickInstruct}/>
            
        </div>
        <button to="complete" onClick={props.HandleSave}>Save</button><br />
        <button onSubmit={props.handleSubmit} to="complete">Place Order</button>
        </form>
    </div>
  );
};
export default Form;

