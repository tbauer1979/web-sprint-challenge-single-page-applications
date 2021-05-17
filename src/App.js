import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route,Link, useHistory, Switch} from "react-router-dom";
import CompanyData from './CompanyData'
import CompanyDataTwo from './CompanyDataTwo'
import Form from './Form'
import HomeNav from "./Home-Nav";
import ListCompanies from "./ListCompanies";
import Complete from './Complete'
import axios from 'axios'
import * as yup from 'yup';
import schema from './Schema'


const App = () => {

  const disableNow = true;

  const initialFormValues = {
    
  size: "",

  Canadian_Bacon: "",
  pineapple: false,
  artichoke: false,
  Spicy_Italian_Sausage: false,
  Extra_Cheese: false,
  Roasted_Garlic: false,
  mushroom: false,
  onion: false,
  banana_peppers: false,
  sausage: false,
  Pepperoni: false,
  Grilled_Chicken: false,
  instructions: "",
  name: "",
  phone: ""
}

const initialError = {
  size: "",
  name: "",
  phone: "",
}
  // STATE FOR FORM
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialError);
  const [disable, setDisable] = useState(disableNow);

  const [data,setDate] = useState(CompanyData)

  const inputChange = (event)  => {
    const { name, value, checked, type } = event.target
    const inputValue = type === "checkbox" ? checked : value
    
    yup.reach(schema, name).validate(inputValue)
      .then(() => 
      
        setFormErrors({...formErrors,[name]: ''}))
      .catch((err) =>
        setFormErrors({ ...formErrors,[name]: err.errors[0]}));
      setFormValues({...formValues,[name]: inputValue})
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisable(!valid));
  }, [formValues]);


  
  const postNewOrder = (newOrder) => {
    
    axios 
      .post('https://reqres.in/api/orders/',newOrder)
      .then(({data}) =>{
        console.log(data)
        setOrder([data, ...order]);
        setFormValues(initialFormValues);
        console.log(order)
      });  
  };

  const formSubmit = (event) => {
    event.preventDefault()
    console.log("test")
    postNewOrder(formValues)

  }



  


  return (
    <div className="app">
      <div className="header">
          <div className="title">Lambda Eats</div>
          <div>
                <Link to='/' className="navbuttons">Home</Link>
                <Link to='/pizza' id ="order-pizza"  className="navbuttons">Order Now</Link>
              </div>
            <div>
              
            </div>
      </div>
<HomeNav data={data}/>  
 <Switch>
 
<Route exact path="/"> <ListCompanies data={data} /></Route>
  <Route path="/pizza">
    <Form formSubmit={formSubmit}inputChange={inputChange} />   
  </Route>
  <Route path="/complete">
          {order.map((newOrder) => {
            return <Complete  key={newOrder.id} orders={newOrder}/> 
          })}
        </Route>   
         
  </Switch>
  
    </div>
  );
};
export default App;

