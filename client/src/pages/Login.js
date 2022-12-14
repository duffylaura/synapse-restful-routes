import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import AuthService from '../utils/auth';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-grey-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Login = (props) => {
  const [formState, setFormState] = useState({ 
    username: '',
    password: '' 
  });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      // clear form values
      AuthService.login(data.login.token);
      setFormState({
        username: '',
        password: '',
      });
    } catch (e) {
      console.error(e);
    }

  };

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
                    <form >
                        <div className="col text-center"><h2> Login </h2></div><br></br>
                        <div className="col text-center">
                            <input value={formState.username} name="username" 
                            onChange={handleChange} type="text" 
                            placeholder="Username"/>
                        </div><br></br>
                        <div className="col text-center">
                            <input value={formState.password} name="password" 
                            onChange={handleChange} type="password" 
                            placeholder="Password"/>
                        </div><br></br>
                        <div className="col text-center">
                          <button className="custom-button" type="button" onClick={handleFormSubmit}>Submit</button>
                        </div>
                      </form>
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