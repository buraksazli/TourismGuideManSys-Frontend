import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import Pagination from 'react-bootstrap/Pagination';

function ModalButton() {
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
    const [itemsPerPage] = useState(7); 
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
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
          <Modal1.Body style={{backgroundColor: "#e3ebf7"}}>
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
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
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
            </Table>
            <Pagination>
                {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
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

export default ModalButton