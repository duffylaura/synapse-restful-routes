import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import AuthService from '../utils/auth';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-grey-banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [errorMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      AuthService.login(data.addUser.token);
      //set form stat back to nothing
      setFormState ({
        username: '',
        email: '',
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
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form className="form">
                  <div className="col text-center"><h2> Sign Up</h2></div><br></br>
                  <div className="col text-center">
                    <label>Username:
                      <input value={formState.username} name="username"
                        onChange={handleInputChange} type="text"
                        placeholder="Create your username." />
                    </label>
                  </div><br></br>
                  <div className="col text-center">
                    <label>Email:
                      <input value={formState.email} name="email"
                        onChange={handleInputChange} type="email"
                        placeholder="Enter email." />
                    </label>
                  </div><br></br>
                  <div className="col text-center">
                    <label>Password:
                      <input value={formState.password} name="password"
                        onChange={handleInputChange} type="password"
                        placeholder="Enter a password." />
                    </label>
                  </div><br></br>
                  <div className="col text-center">
                    <button className="custom-button" type="button" onClick={handleFormSubmit}>Join the Community!</button>
                  </div>
                </form>
              )}
              {errorMessage && (<div> <p className="error-text">{errorMessage}</p> </div>)}
            </div>
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
  );
}
export default Signup;