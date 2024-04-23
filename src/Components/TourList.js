import React from 'react';
import Nav from './Navbar';
import { useState  } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Rating from './Rating';

import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import ModalButton from './ModalButton';

export default function TourList({ Toggle }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = [
        { id: 1, name: 'Örnek 1', value: 10 },
        { id: 2, name: 'Örnek 2', value: 20 },
        { id: 3, name: 'Örnek 3', value: 30 },
        { id: 4, name: 'Örnek 4', value: 30 },
        { id: 5, name: 'Örnek 5', value: 40 },
        { id: 6, name: 'Örnek 6', value: 50 },
        { id: 7, name: 'Örnek 7', value: 60 },
        { id: 8, name: 'Örnek 8', value: 70 },
        { id: 6, name: 'Örnek 6', value: 50 },
        { id: 7, name: 'Örnek 7', value: 60 },
        { id: 8, name: 'Örnek 8', value: 70 },
        { id: 9, name: 'Örnek 9', value: 80 }
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
            
            <h1>Completed Tours</h1>
            <Table  bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Tourist List</th>
                    <th>Ratings</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.value}</td>                    
                    <td><ModalButton/></td>
                    <td>
                        <Button variant="primary" onClick={handleShow}>
                            See Ratings
                        </Button>

                        <Modal1 show={show} onHide={handleClose} dialogClassName='modal-dialog modal-dialog-scrollable' >
                        <Modal1.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
                            <Modal1.Title>Tourist's Ratings and Comments </Modal1.Title>
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
