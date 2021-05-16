import React from "react";


const CompanyCard = (props) => {

    const {company,type,wait,fee, data} = props



  return (
    <div className="CompanyCard">
       <h3>Company {company}</h3>
       <p>type{type}</p>
       <p>wait{wait}</p>
       <p>fee{fee}</p>
    </div>
  );
};
export default CompanyCard;
