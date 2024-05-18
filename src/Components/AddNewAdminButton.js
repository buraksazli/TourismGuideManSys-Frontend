import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {addNewAdmin} from '../api/admin';
export default function AddNewAdminButton() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [error, setError] = useState('');

    const [admin, setAdmin] = useState({
        firstName: "",
        lastName: "",
        email:"",
        userName:"",
        password:"",
        confirmPassword:"",
        phoneNumber:"",
        birthDate:""
    });

    function handleChange(e) {
        const value = e.target.value;
        setAdmin({
          ...admin,
          [e.target.name]: value
        });
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
          const response = await addNewAdmin({admin});
          if(!response.succeeded)
            console.log(response.response.data.errors)
          console.log(response);     
        } catch (error){
            setError('Adding not successful');
            console.log(error);
        }
      };

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="3 2 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
            Add New
        </Button>
        <Modal show={show} onHide={handleClose} dialogClassName="modal-lg" >
          <Modal.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal.Title>Add New Admin </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: "#DCDCDC"}}>
            <h3 className='text-center'>Informations</h3>
            <form  onSubmit={handleSubmit}>
                <div className="form-group mt-3 "> 
                    <input type="text" className="form-control h-100 " name='firstName'  value={admin.firstName} onChange={handleChange} placeholder="Enter First Name"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='lastName'  value={admin.lastName} onChange={handleChange}  placeholder="Enter Last Name"></input>
                </div>
                <div className="form-group mt-3 "> 
                    <input type="email" className="form-control h-100 " name='email' value={admin.email} onChange={handleChange} placeholder="Enter email"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='userName' value={admin.userName} onChange={handleChange}  placeholder="Enter Username"></input>
                </div>
                <div className="form-group mt-3 "> 
                    <input type="password" className="form-control h-100 " name='password'  value={admin.password} onChange={handleChange}  placeholder="Enter Password"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="password" className="form-control" name='confirmPassword'  value={admin.confirmPassword} onChange={handleChange}  placeholder="Enter Password Again"></input>
                </div>
                <div className="form-group mt-3 "> 
                    <input type="text" className="form-control h-100 "  name='phoneNumber' value={admin.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="date" className="form-control" name='birthDate'  value={admin.birthDate} onChange={handleChange}  placeholder="Enter Birth Date"></input>
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
