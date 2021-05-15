import React from "react";
import { BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import Form from './Form'



const HomeNav = () => {
  return (
    <div className="home-Nav">
        <div className="title">Lambda Eats</div>
        <div className="navBTNS">
            <Router> 
            <Link  to="/" className="navbuttons">Home</Link>
            <Link to="/order" className="navbuttons">Order Now</Link>
            
            
            </Router>
        </div>
        <div>
            <img className="headerPic" src="https://tavistockrestaurantcollection.com/wp-content/uploads/2018/09/PPB-header.jpg" />
        </div>
    </div>
  );
};
export default HomeNav;
