import React from "react";
import logo from '../assets/logo-grey-banner.png';


const NoMatch = () => {
  return (
    <div>
        <h1>404 Page Not Found *single tear* </h1>
        <img src={logo} className="img-fluid" alt='Synapse Logo'></img>
    </div>
  );
};

export default NoMatch;