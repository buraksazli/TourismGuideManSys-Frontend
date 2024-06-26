import React from 'react'
import Nav from './Navbar'
import Rating from './Rating'
import { useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';

import Table from 'react-bootstrap/Table';

import Pagination from 'react-bootstrap/Pagination';
function Tourists( { Toggle }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = [
        { id: 1, name: 'Örnek 1', age:20,value: 10 },
      { id: 2, name: 'Örnek 2', age:20,value: 20 },
      { id: 3, name: 'Örnek 3', age:20,value: 30 },
      { id: 4, name: 'Örnek 4', age:20,value: 30 },
      { id: 5, name: 'Örnek 5', age:20,value: 40 },
      { id: 6, name: 'Örnek 6',age:20, value: 50 },
      { id: 7, name: 'Örnek 7', age:20,value: 60 },
      { id: 8, name: 'Örnek 8', age:20,value: 70 },
      { id: 6, name: 'Örnek 6', age:20,value: 50 },
      { id: 7, name: 'Örnek 7', age:20,value: 60 },
      { id: 8, name: 'Örnek 8', age:20,value: 70 },
      { id: 9, name: 'Örnek 9', age:20,value: 80 }
      ];
   
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='px-3'>       
            <Nav Toggle={Toggle} />     
            
            <h1>User List</h1>
            <Table  hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Comments</th>
                    <th>Value</th>
                    
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                        <Button variant="primary" onClick={handleShow}>
                            See Ratings
                        </Button>

                        <Modal1 show={show} onHide={handleClose} dialogClassName='modal-dialog modal-dialog-scrollable' >
                        <Modal1.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
                            <Modal1.Title>Ratings and Comments </Modal1.Title>
                        </Modal1.Header>
                        <Modal1.Body style={{backgroundColor: "#DCDCDC"}}>
                            <Rating/>
                            <Rating/>
                            <Rating/>
                            <Rating/>         
                        </Modal1.Body>
                        <Modal1.Footer style={{backgroundColor: "#F0F0F0"}}>
                            <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                            Save Changes
                            </Button>
                        </Modal1.Footer>
                        </Modal1>
                    </td>
                    <td>
                    <button type="button" class="btn btn-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
                        </svg>
                        Delete
                     </button>
                
                     <button type="button" class="btn btn-danger ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill-x" viewBox="0 0 16 16">
                            <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0M6.854 5.146 8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 1 1 .708-.708"></path>
                        </svg>
                        Ban
                    </button>
                        
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination>
                {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>
 
        </div> 
  )
}

export default Tourists