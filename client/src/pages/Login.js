import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-grey-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                      {data ? (
                      <p>
                        Success! You may now head{' '}
                        <Link to="/profile">back to your profile.</Link>
                      </p>
                    ) : (
                          <LoginForm />
                    )}
                        {error && (
                          <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                            </div>)}
                    </div>
                <div className="col-1"></div>
            </div>

            <div className="hide-on-desktop">
                <div className="col-sm"><br></br></div>
                <div className="col-sm"><img src={logo} className="img-fluid" alt='Synapse Logo'></img> </div>
                <div className="col-sm"><br></br></div>
            </div>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        </div>
    </div>
  </div>
)};
    

export default Login;