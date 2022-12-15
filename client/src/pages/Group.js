import React, {useState} from 'react'; 
import NavBar from '../components/NavBar'; 
import Auth from '../utils/auth';
import {createGroup} from '../utils/API'; 
import { Form, Button} from 'react-bootstrap';
import logo from '../assets/logo-grey-banner.png';
import profilePlaceholder from '../assets/profile-placeholder.png';


const Group = () => {
    //create a state for holding our search field data 
    const [groupName, setGroupName] = useState('');

    //create a method to set state on form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!groupName) { return false;}

        try {
            handleCreateGroup(groupName); 
            
        } catch (err) {
            console.error(err); 
        }

        //rest form state?
    }; 


    //create a method to handle saving a definition to our database
    const handleCreateGroup = async (groupName) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null; 

        if (!token) {return false;}

        try {
            const response = await createGroup(groupName, token); 
            if (!response.ok) {throw new Error ('Cannot update user')}

        } catch (err) {
            console.error(err); 
        }
    };


    return (
        <>

        <NavBar/> 
    
        <div clasName="container">
        <div className="font">
            <div className="row">
                <div class="row"><br></br><br></br></div>
                <div className="col-1"></div>
                <div className="col-4"> 
                    <div class="hide-on-phone">
                        <div className="col-sm"><br></br></div>
                        <div className="col-sm"><img src={profilePlaceholder} className="img-fluid" alt='Profile'></img> </div>
                        <div className="col-sm"><br></br></div>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Row>
                                <Form.Control
                                name='groupName'
                                value = {groupName}
                                onChange = {(e)=>setGroupName(e.target.value)}
                                type='text'
                                size = 'lg'
                                placeholder = 'What is the unique name of your group?'
                                />
                            </Form.Row>
                            <Button type='submit' class="custom-button" variant = 'success'>
                                Create New Group
                            </Button>
                        </Form>


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
    </>

    )

}

export default Group; 