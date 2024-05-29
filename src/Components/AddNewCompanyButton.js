import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addNewCompany } from '../api/company';

function AddNewCompanyButton() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [error, setError] = useState('');
    const [company, setCompany] = useState({
        name: "",        
        email:"",       
        address:"",       
        phoneNumber:""
    });

    function handleChange(e) {
        const value = e.target.value;
        setCompany({
          ...company,
          [e.target.name]: value
        });
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const token = localStorage.getItem('Token');
          const response = await addNewCompany({company,token});
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
        <Button className='' variant="primary" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="3 2 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
            Add New
        </Button>
        <Modal show={show} onHide={handleClose} dialogClassName="modal-lg" >
          <Modal.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal.Title>Add New Admin </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: "#e3ebf7"}}>
            <h3 className='text-center'>Informations</h3>
            <form  onSubmit={handleSubmit}>
                <div className="form-group mt-3 "> 
                    <input type="text" className="form-control h-100 " name='name'  value={company.name} onChange={handleChange} placeholder="Enter Company Name"></input>
                </div>
                <div className="form-group mt-3 "> 
                    <input type="email" className="form-control h-100 " name='email' value={company.email} onChange={handleChange} placeholder="Enter email"></input>
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name='address' value={company.address} onChange={handleChange}  placeholder="Enter Address"></input>
                </div>
               
                <div className="form-group mt-3 "> 
                    <input type="text" className="form-control h-100 "  name='phoneNumber' value={company.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number"></input>
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

export default AddNewCompanyButton