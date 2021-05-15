import React, {useState} from "react";
import Home from './Home'
import CompanyData from './CompanyData'
import Form from './Form'


const App = (props) => {

  // STATE FOR FORM
  const [size,setSize] = useState("")
  const [sauce,setSauce] = useState("")
  const [toppings,setToppings] = useState([])
  const [] = useState("")


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




  return (
    <div className="app">
      <Home data={data}/>  
      <h1></h1>
      <Form 
          handleClickSize={handleClickSize}
          handleClickSauce={handleClickSauce}
          handleClickToppings={handleClickToppings}/>
    </div>
  );
};
export default App;
