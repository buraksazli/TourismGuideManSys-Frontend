import React, { useState , useEffect } from 'react'
import { getTourById } from '../api/current_tours';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import DeleteTouristFromTourButton from './DeleteTouristFromTourButton';

import {deleteTouristFromTour} from '../api/current_tours';
function TouristModalButton({id}) {
    const [show, setShow] = useState(false);
    const [tourists, setTourists] = useState([]);
    const handleClose = () => setShow(false);
    const [isLoading, setIsLoading] = useState(true);
    const fetchtouristtour = async (id) => {
            try {
                const token = localStorage.getItem('Token');
                const response = await getTourById(token , id);
                console.log(response.data.touristTours);
                setTourists(response.data.touristTours);
            } catch {
                console.log('error');
            }      
        }

    const handleShow = () => {
        setShow(true);
        fetchtouristtour(id).then(() => {
          setIsLoading(false);
        });
    }
    
    const removeTouristFromTour = async (touristTourId) => {
      try {
        const token = localStorage.getItem('Token');
        await deleteTouristFromTour(token , touristTourId);
        setTourists(tourists.filter(tourist => tourist.id !== touristTourId));
      } catch {
        console.log('error');
      } 
  }
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); 
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tourists.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <>

        <Button variant="secondary" onClick={handleShow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="2 0 16 20">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></path>
          </svg>
          See Tourists
        </Button>
  
        <Modal1 show={show} onHide={handleClose} dialogClassName="modal-lg" >
          <Modal1.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal1.Title>Tourist List </Modal1.Title>
          </Modal1.Header>
          <Modal1.Body style={{backgroundColor: "#e3ebf7"}}>
          <div>{isLoading ? (
            <div className='text-center'><Spinner animation="border" variant="info" /></div>
          ) : (
              
            <MDBTable align='middle' className='border' style={{backgroundColor:"white" }}>
                <MDBTableHead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Value</th>
                    
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.tourist.username}</td>
                    <td>{item.tourist.birthDate}</td>
                    <td>    
                    <DeleteTouristFromTourButton touristTourId = {item.id} onDelete={removeTouristFromTour}/>  
                       
                    </td>
                    </tr>
                ))}
                </MDBTableBody>
            </MDBTable>)}</div>
            <Pagination>
                {Array.from({ length: Math.ceil(tourists.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination></Modal1.Body>
          <Modal1.Footer style={{backgroundColor: "#F0F0F0"}}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal1.Footer>
        </Modal1>
      </>
    );
}

export default TouristModalButton