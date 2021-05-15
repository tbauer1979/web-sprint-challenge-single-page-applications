import React, { useState } from "react";

const Form = (props) => {


  return (
    <div><h1>Build Your Own Pizza</h1>
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
                <form onChange={props.handleClickSauce}>
                    <input name="sauce" type="radio" value="original" />Original Red
                    <input name="sauce" type="radio"  value="garlic"/>Garlic Ranch
                    <input name="sauce" type="radio" value="bbq"  />BBQ Sauce
                    <input name="sauce" type="radio" value="spinach"  />Spinach Alfredo
                </form>
                </div>
        </div>

   {/* Add Toppings */}
   <div className="toppings">
            <h2>Add Toppings</h2>
            <p>Choose up to 10</p>
            <div>
                <form onChange={props.handleClickToppings}>
                    <input name="toppings" type="checkbox" value="Pepperoni" />Pepperoni
                    <input name="toppings" type="checkbox" value="Sausage" />Sausage
                    <input name="toppings" type="checkbox" value="Canadian Bacon" />Canadian Bacon
                    <input name="toppings" type="checkbox" value="Spicy Italian Sausage" />Spicy Italian Sausage
                    <input name="toppings" type="checkbox" value="Grilled Chicken" />Grilled Chicken
                    <input name="toppings" type="checkbox" value="Onions" />Onions
                    <input name="toppings" type="checkbox" value="Green Pepper" />Green Pepper
                    <input name="toppings" type="checkbox" value="Diced" />Diced
                    <input name="toppings" type="checkbox" value="Black Olives" />Black Olives
                    <input name="toppings" type="checkbox" value="Roasted Garlic" />Roasted Garlic
                    <input name="toppings" type="checkbox" value="Artichoke Hearts" />Artichoke Hearts
                    <input name="toppings" type="checkbox" value="Three Cheese" />Three Cheese
                    <input name="toppings" type="checkbox" value="Pineapple" />Pineapple
                    <input name="toppings" type="checkbox" value="Extra Cheese" />Extra Cheese
                </form>
                </div>
        </div>


          {/* choice of substitute */}
          <div className="substitute">
            <h2>Choice of Substitute</h2>
            <p>Choose up to 1</p>

            <form className="substitute" onChange={props.handleClickGluten}>
                <input name="substitute" type="checkbox" value="gluten" />Gluten Free (= $1.00)
            </form>
        </div>



        {/* special instructions */}
        <div className="substitute">
            <h2>Special Instructions</h2>

            <form className="substitute" onChange={props.handleClickGluten}>
                <input name="substitute" type="text" value={props.instructions} size="60" placeholder="Anytihng you would like to add?"/>
            </form>
        </div>
    </div>
  );
};
export default Form;
