import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {addNewGuide} from '../api/guide';
import Alert from 'react-bootstrap/Alert';

function AddNewGuideButton() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [alert, setAlert] = useState(false);
    const [error, setError] = useState('');

    const [guide, setGuide] = useState({
        firstName: "",
        lastName: "",
        email:"",
        userName:"",
        password:"",
        confirmPassword:"",
        phoneNumber:"",
        TCNo:"",
        birthDate:""
    });

    function handleChange(e) {
        const value = e.target.value;
        setGuide({
          ...guide,
          [e.target.name]: value
        });
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
          const response = await addNewGuide({guide});
          if(response.succeeded){
            setAlert(true);
          } else {
            console.log(response.response.data.errors);
          }
            
          console.log(response);     
        } catch (error){
            setError('Adding not successful');
            console.log(error);
        }
      };

  return (
    <div>
        <Button className='mt-2' variant="primary" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="3 2 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
            Add New
        </Button>
        
        <Modal show={show} onHide={handleClose} dialogClassName="modal-lg" >
          <Modal.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal.Title>Add New Guide </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: "#e3ebf7"}}>
            {alert && (<Alert variant="success" onClose={() => setAlert(false)} dismissible>
                <Alert.Heading>Adding successful!</Alert.Heading>
            </Alert>) }
            <h3 className='text-center'>Informations</h3>
            <form  onSubmit={handleSubmit}>
                <div className="form-group mt-3 "> 
                    <input type="text" className="form-control h-100 " name='firstName'  value={guide.firstName} onChange={handleChange} placeholder="Enter First Name"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='lastName'  value={guide.lastName} onChange={handleChange}  placeholder="Enter Last Name"></input>
                </div>
                <div className="form-group mt-3 "> 
                    <input type="email" className="form-control h-100 " name='email' value={guide.email} onChange={handleChange} placeholder="Enter email"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='userName' value={guide.userName} onChange={handleChange}  placeholder="Enter Username"></input>
                </div>
                <div className="form-group mt-3 "> 
                    <input type="password" className="form-control h-100 " name='password'  value={guide.password} onChange={handleChange}  placeholder="Enter Password"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="password" className="form-control" name='confirmPassword'  value={guide.confirmPassword} onChange={handleChange}  placeholder="Enter Password Again"></input>
                </div>
                <div className="form-group mt-3 "> 
                    <input type="text" className="form-control h-100 "  name='phoneNumber' value={guide.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number"></input>
                </div>
                <div className="form-group mt-3 "> 
                    <input type="text" className="form-control h-100 "  name='TCNo' value={guide.TCNo} onChange={handleChange} placeholder="Enter TC No"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="date" className="form-control" name='birthDate'  value={guide.birthDate} onChange={handleChange}  placeholder="Enter Birth Date"></input>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                <button type="submit" className="btn btn-dark w-100">Submit</button>
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: "#F0F0F0"}}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default AddNewGuideButton