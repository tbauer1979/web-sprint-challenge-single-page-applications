import React from "react";
import CompanyCard from "./CompanyCard";
import HomeNav from './Home-Nav'


const Home = (props) => {




  return (
    <div className="home">
        <HomeNav />
        {props.data.map(org => {
          return (
            <CompanyCard key={org.id} data={props.data}/>
          )
        })}
    </div>
  );
};
export default Home;
