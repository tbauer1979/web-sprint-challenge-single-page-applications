import React, {useState} from "react";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import CompanyData from './CompanyData'
import Form from './Form'
import HomeNav from "./Home-Nav";
import ListCompanies from "./ListCompanies";

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
      <div className="header">
          <div className="title">Lambda Eats</div>
                 <div><Router> 
                    <Link to="/" className="navbuttons">Home</Link>
                    <Link to="/order" className="navbuttons" >Order Now</Link>
                </Router>
          </div>
      </div>



        <HomeNav data={data}/>  






<Router>
      <Route exact path="/order"><Form handleClickSize={handleClickSize}
          handleClickSauce={handleClickSauce}
          handleClickToppings={handleClickToppings}
          handleClickGluten={handleClickGluten}
          handleClickInstruct={handleClickInstruct} /> /></Route>
      <Route exact={true} path="/"> 
            <div className="test"><ListCompanies data={data} /></div>
      </Route>
      </Router>
  
    </div>
  );
};
export default App;




          