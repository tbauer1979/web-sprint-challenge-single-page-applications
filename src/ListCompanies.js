import React, {useState} from "react";
import CompanyCard from "./CompanyCard";
import CompanyDataTwo from './CompanyDataTwo'



const ListCompanies = (props) => {

const [datatwo,setDatatwo] = useState(CompanyDataTwo)


  return (
    <div><h1>Food Delivery Options</h1>
        <div className="listcompanies">
            {props.data.map(org => {
              return (
                
                <CompanyCard data={props.data}/>
                
              )
            })}
        </div>




        <div className="listcompanies">
            {datatwo.map(org => {
              return (
                
                <CompanyCard key={org.id} data={datatwo.data}/>
                
              )
            })}
        </div>
    </div>
  );
};
export default ListCompanies;
