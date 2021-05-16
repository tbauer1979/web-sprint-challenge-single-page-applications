import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import CompanyData from './CompanyData'
import Form from './Form'
import HomeNav from "./Home-Nav";
import ListCompanies from "./ListCompanies";
import Complete from './Complete'

const App = (props) => {

  const customerData = {
    name:"",
    address:"",
    phone:"",
  }
  // STATE FOR FORM
  const [customer,setCustomer] = useState([customerData])
  const [size,setSize] = useState("")
  const [sauce,setSauce] = useState("")
  const [toppings,setToppings] = useState([])
  const [gluten,setgluten] = useState({Gluten:""})
  const [instructions,setInstructions] = useState("")
  const [confirmed,setconfirmed] = useState("")

  const [data,setDate] = useState(CompanyData)

  // const handleClickCustomer = (event) => {
  //   setCustomer([event.target.name],event.target.value)
  //  }

  //  const handleClickCustomer = (event) => {
  //   if (event.target.value === "") {
  //     setCustomer([...customer,event.target.name],event.target.value)
  //   }
  // }

  const handleClickCustomer = (event) => {
    const name = [event.target.name]
    const value = [event.target.value]
    setCustomer({
      [name]:value
    })
    }

const handleClickSize = (event) => {
  setSize(event.target.value)
}

const handleClickSauce = (event) => {
  setSauce(event.target.value)
}


const handleClickToppings = (event) => {
  if (event.target.checked === true) {
    setToppings([...toppings,event.target.name],event.target.value)
  }
}

const handleClickGluten = (event) => {
  setgluten(event.target.checked)
}

const handleClickInstruct = (event) => {
  setInstructions(event.target.value)
}

const HandleSubmit = (event) => {
  event.preventDefault()
  if (confirmed === "yes") {
    return () => {
      <Router>
        <Route exact path="complete" /> <Complete />
      </Router>
    };
  } {
    console.log("Please click safe")
  }
  event.preventDefault()
}


const HandleSave = (event) => {
  setconfirmed("yes")
  console.log(confirmed)
  event.preventDefault()
}

  return (
    <div className="app">
      <div className="header">
          <div className="title">Lambda Eats</div>
                 <div><Router> 
                    <Link to="/" className="navbuttons">Home</Link>
                    <Link to="/pizza" id ="order-pizza"  className="navbuttons">Order Now</Link>
                </Router>
          </div>
      </div>



        <HomeNav data={data}/>  






<Router>
      <Route exact path="/pizza">
        <Form handleClickSize={handleClickSize}
              handleClickSauce={handleClickSauce}
              handleClickToppings={handleClickToppings}
              handleClickGluten={handleClickGluten}
              handleClickInstruct={handleClickInstruct} 
              handleClickCustomer={handleClickCustomer}
              handleSubmit={HandleSubmit}
              HandleSave={HandleSave}/> 
      </Route>

      <Route exact path="/"> <ListCompanies data={data} /></Route>
</Router>
  
    </div>
  );
};
export default App;




          