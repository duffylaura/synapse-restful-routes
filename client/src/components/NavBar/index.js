import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        
        <div className="container">
            <div className = "row">

                <Link to="/group">
                    <div class="col text-center"> <button class="custom-nav-button"> Make New Group </button> </div> <br></br>
                </Link>

                <Link to="/network">
                    <div class="col text-center"> <button class="custom-nav-button"> My Network </button> </div> <br></br>
                </Link>

                <Link to="/conversation">
                    <div class="col text-center"> <button class="custom-nav-button"> Conversations </button> </div> <br></br>
                </Link>

                <Link to="/jobs">
                    <div class="col text-center"> <button class="custom-nav-button"> Job Hunt </button> </div> <br></br>
                </Link>
  
            </div>
        </div>


        
    )
};

export default Nav;
