import React, { useState } from 'react'
import { getTourById } from '../api/current_tours';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';

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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); 
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tourists.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <>

        <Button variant="primary" onClick={handleShow}>
          See Tourists
        </Button>
  
        <Modal1 show={show} onHide={handleClose} dialogClassName="modal-lg" >
          <Modal1.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal1.Title>Tourist List </Modal1.Title>
          </Modal1.Header>
          <Modal1.Body style={{backgroundColor: "#DCDCDC"}}>
          <div>{isLoading ? (
            <div className='text-center'><Spinner animation="border" variant="info" /></div>
          ) : (
              
            <Table bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Value</th>
                    
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.tourist.username}</td>
                    <td>{item.tourist.birthDate}</td>
                    <td>    
                        <button type="button" class="btn btn-danger ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                            Remove
                        </button>       
                       
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>)}</div>
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