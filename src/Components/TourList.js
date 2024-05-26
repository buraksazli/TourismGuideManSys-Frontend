import React from 'react';
import Nav from './Navbar';
import { useState , useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Pagination from 'react-bootstrap/Pagination';
import Rating from './Rating';
import {getCurrentTours} from '../api/current_tours';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import TouristModalButton from './TouristModalButton';
import RatingModalButton from './RatingModalButton';

export default function TourList({ Toggle }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [tour, setTour] = useState([]);
      
      useEffect( () => {
        const fetchtour = async () => {
        try {
            const token = localStorage.getItem('Token');
            const response = await getCurrentTours(token);
            console.log(response);
            setTour(response.data);
        } catch {
            console.log('error');
        }
        
      }
        fetchtour();
      },[]);
   
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = tour.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='px-3'>       
            <Nav Toggle={Toggle} />     
            
            <h1>Completed Tours</h1>
            <MDBTable align='middle' className='border' style={{backgroundColor:"white" }}>
                <MDBTableHead>
                <tr>
                <th width="10">#</th>
                    <th width="170">Name</th>
                    <th width="170">Guide</th>
                    <th width="100">Type</th>
                    <th width="100">Region</th>
                    <th width="100">Date</th>
                    <th>Tourist List</th>
                    <th>Ratings</th>
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.guide.username}</td>
                    <td>{item.tourType}</td> 
                    <td>{item.region}</td> 
                    <td>{item.startDate}</td>                     
                    <td><TouristModalButton id={item.id}/></td>
                    <td>
                        <RatingModalButton id={item.id}/>
                    </td>
                    </tr>
                ))}
                </MDBTableBody>
            </MDBTable>
            <Pagination>
                {Array.from({ length: Math.ceil(tour.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>
 
        </div> 
  )
}
