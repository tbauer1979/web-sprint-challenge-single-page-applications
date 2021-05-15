import React, {useState} from "react";
import { BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import Home from './Home'
import CompanyData from './CompanyData'
import Form from './Form'
import HomeNav from "./Home-Nav";


const App = (props) => {

  // STATE FOR FORM
  const [size,setSize] = useState("")
  const [sauce,setSauce] = useState("")
  const [toppings,setToppings] = useState([])
  const [gluten,setgluten] = useState({Gluten:""})
  const [instructions,setInstructions] = useState("")


  const [data,setDate] = useState(CompanyData)




const handleClickSize = (event) => {
  setSize(event.target.value)
}

const handleClickSauce = (event) => {
  setSauce(event.target.value)
}


const handleClickToppings = (event) => {
  if (event.target.checked === true) {
    setToppings([...toppings,event.target.value],event.target.value)
  }
}

const handleClickGluten = (event) => {
  setgluten(event.target.checked)
}

const handleClickInstruct = (event) => {
  setgluten(event.target.checked)
}




  return (
    <div className="app">
  
      <Home data={data}/>  
      <h1></h1>

<Router>
      <Route path="/order"> <Form 
          handleClickSize={handleClickSize}
          handleClickSauce={handleClickSauce}
          handleClickToppings={handleClickToppings}
          handleClickGluten={handleClickGluten}
          handleClickInstruct={handleClickInstruct}/> </Route>
      </Router>
    </div>
  );
};
export default App;
