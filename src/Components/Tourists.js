import React from 'react'
import Nav from './Navbar'
import Rating from './Rating'
import { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import {getAllTourists} from '../api/tourist';
import TouristRatingModalButton from './TouristRatingModalButton';
import AddNewTouristButton from './AddNewTouristButton';
import BanButton from './BanButton';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { deleteTouristById } from '../api/tourist';
import DeleteTouristButton from './DeleteTouristButton';

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

    const deleteTourist = async (userId) => {
        try {
          const token = localStorage.getItem('Token');
          await deleteTouristById(token , userId);
          setTourists(tourists.filter(tourist => tourist.userId !== userId));
        } catch {
          console.log('error');
        } 
    }

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
                <h1 className='fw-bold text-dark'>Tourist List</h1>
                <AddNewTouristButton/>
            </div>
            <MDBTable align='middle' className='border' style={{backgroundColor:"white" }}>
                <MDBTableHead>
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
                </MDBTableHead>
                <MDBTableBody>
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
                        <DeleteTouristButton userId={item.userId } onDelete={deleteTourist}/>
                    </td>
                    <td>
                     <BanButton username={item.username}/>
                    </td>    
                    
                    </tr>
                ))}
                </MDBTableBody>
            </MDBTable>
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