import React from "react";
import logo from '../assets/logo-grey-banner.png';
import '../index.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="container">
            <div className="row"> <br></br> <br></br></div>
            <div className="row align-items-center">
                <div className="col-sm"> </div>
                <div className="col-sm">
                    <img src={logo} className="img-fluid" alt='Synapse Logo'></img>
                    <div>
                        <Link to="/login">
                            <div className="col text-center"> <button className="custom-button"> Login </button> </div> <br></br>
                        </Link>
                        
                        <Link to="/signup">
                        <div className="col text-center"><button className="custom-button"> Sign Up </button></div> <br></br>
                        </Link>

                        <Link to="/about">
                        <div className="col text-center"><button className="custom-button"> About </button></div> <br></br>
                        </Link>
                    </div>
                </div>
                <div className="col-sm"> </div>
            </div>
        </div>
    );

}

export default Landing;