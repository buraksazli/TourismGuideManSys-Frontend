import React from 'react'
import Nav from './Navbar'
import Rating from './Rating'
import { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import {getAllTourists} from '../api/tourist';
import TouristRatingModalButton from './TouristRatingModalButton';
import AddNewTouristButton from './AddNewTouristButton';
import BanButton from './BanButton';
function Tourists( { Toggle }) {
    const [show, setShow] = useState(false);
    const [tourists, setTourists] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
      useEffect( () => {
        const fetchtourist = async () => {
            try {
                const token = localStorage.getItem('Token');
                const response = await getAllTourists(token);
                console.log(response);
                setTourists(response.data);
            } catch {
                console.log('error');
            }
            
          }
            fetchtourist();
    }, [])

      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = tourists.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='px-3'>       
            <Nav Toggle={Toggle} />     
            <div className='d-flex flex-row justify-content-between'>
                <h1>User List</h1>
                <AddNewTouristButton/>
            </div>
            <Table responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Birth Date</th>
                    <th>Comments</th>
                    <th>Delete</th>
                    <th>Ban</th>
                    
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.username}</td>
                    <td>{item.birthDate}</td>
                    <td>
                        <TouristRatingModalButton id={item.userId}/>
                    </td>
                    <td>
                    <button type="button" class="btn btn-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
                        </svg>
                        Delete
                     </button>
                    </td>
                    <td>
                     <BanButton username={item.username}/>
                    </td>    
                    
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination>
                {Array.from({ length: Math.ceil(tourists.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>
 
        </div> 
  )
}

export default Tourists