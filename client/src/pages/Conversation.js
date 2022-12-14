import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import profilePlaceholder from '../assets/profile-placeholder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo-grey-banner.png';

function Conversation() {

    return (
        <div className="container">
            <div className="font">
                <div className="row">
                    <div className="row"><br></br><br></br></div>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <div className="hide-on-phone">
                            <div className="col-sm"><br></br></div>
                            <div className="col-sm"><img src={profilePlaceholder} className="img-fluid" alt='Profile'></img> </div>
                            <div className="col-sm"><br></br></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <Link to="/new-post">
                                <div className="col text-center"> <button className="custom-button"> Create New Post </button> </div> <br></br>
                            </Link>
                            <div className="col text-center"><h2> Conversation Page</h2></div><br></br>
                        </div>
                        <div>
                            <p> This is where we see the ongoing conversations</p>
                            <p> and the associated comments </p>
                            {/* associated comments are appended, should be an input area with button to append a new comment */}
                        
                            <Card>
                                <Card.Header>Time Stamp</Card.Header>
                                <Card.Body>
                                <Card.Text className="text-muted text-right"> Post Author</Card.Text>
                                    <Card.Title>Optional? Post title</Card.Title>
                                    
                                    <Card.Text>
                                        This is an example of post content. With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    {/* need new button */}
                                    <Row><input></input></Row> <br></br>
                                    <div className="col text-center"> <Button className="custom-button"> Submit Button </Button></div>
                                </Card.Body>
                            </Card>
                        </div>
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
    );

};

export default Conversation;