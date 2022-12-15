import React from 'react';
import logo from '../assets/logo-grey-banner.png';
import '../index.css';
import LoginForm from '../components/LoginForm/index'

const Login = () => {
    return (
        <div className="container">
        <div className="font">
            <div className="row">
                <div className="row"><br></br><br></br></div>
                <div className="col-1"></div>
                <div className="col-4"> 
                    <div className="hide-on-phone">
                        <div className="col-sm"><br></br></div>
                        <div className="col-sm"><img src={logo} className="img-fluid" alt='Synapse Logo'></img> </div>
                        <div className="col-sm"><br></br></div>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                          <LoginForm />
                    </div>
                <div className="col-1"></div>
            </div>

            <div className="hide-on-desktop">
                <div className="col-sm"><br></br></div>
                <div className="col-sm"><img src={logo} className="img-fluid" alt='Synapse Logo'></img> </div>
                <div className="col-sm"><br></br></div>
            </div>
        </div>
    </div>
  </div>
)};
    

export default Login;