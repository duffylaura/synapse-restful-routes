import React, {useState} from 'react'; 
import NavBar from '../components/NavBar'; 
import Auth from '../utils/auth';
import {updateUser} from '../utils/API'; 
import { Form } from 'react-bootstrap/lib/Navbar';

//The only input on the profile (right now) is a user defining themselves
const Profile = () => {
    //create a state for holding our search field data 
    const [input, setInput] = useState('');

    //create a method to set state on form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!input) { return false;}

        try {
            handleSaveDefinition(input); 
            
        } catch (err) {
            console.error(err); 
        }

        //rest form state?
    }; 


    //create a method to handle saving a definition to our database
    const handleSaveDefinition = async (userData) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null; 

        if (!token) {return false;}

        try {
            const response = await updateUser(userData, token); 
            if (!response.ok) {throw new Error ('Cannot update user')}

            //if user is successfully updated, save input to state
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
                                name='input'
                                value = {input}
                                onChange = {(e)=>setInput(e.target.value)}
                                type='text'
                                size = 'lg'
                                placeholder = 'How do you define yourself?'
                                />
                            </Form.Row>
                            <Button type='submit' class="custom-button" variant = 'success'>
                                Save. 
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

export default Profile; 