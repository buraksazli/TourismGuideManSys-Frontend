import React from 'react'
import Nav from './Navbar'
import Rating from './Rating';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import { useState , useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { getAllReportedRatings } from '../api/rating';
import { deleteJustReport, deleteReportedRating } from '../api/rating';
import DeleteReportedButton from './DeleteReportedButton';

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import DeleteJustReportButton from './DeleteJustReportButton';
function ReportedRatingList({ Toggle }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [reported, setReported] = useState([]);
      
      useEffect( () => {
        const fetchreportedratings = async () => {
        try {
            const token = localStorage.getItem('Token');
            const response = await getAllReportedRatings(token);
            console.log(response);
            setReported(response.data);
        } catch {
            console.log('error');
        }
        
      }
      fetchreportedratings();
      },[]);

      const deleteReportedRatings = async (ratingId) => {
        try {
          const token = localStorage.getItem('Token');
          await deleteReportedRating(token , ratingId);
          setReported(reported.filter(reported => reported.ratingId !== ratingId));
        } catch {
          console.log('error');
        } 
    }

    const deleteJustReportById = async (ratingId) => {
        try {
          const token = localStorage.getItem('Token');
          await deleteJustReport(token , ratingId);
          setReported(reported.filter(reported => reported.ratingId !== ratingId));
        } catch (error) {
          console.log(error);
        } 
    }
   
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = reported.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='px-3'>       
            <Nav Toggle={Toggle} />     
            
            <h1 className='fw-bold text-dark'>Reported Ratings</h1>
            <MDBTable align='middle' className='border' style={{backgroundColor:"white" }}>
                <MDBTableHead>
                <tr>
                    <th>#</th>
                    <th>Reported by</th>
                    <th>Reported Comment</th>
                    <th>Ignore/Delete</th>
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{index}</td>
                    <td>{item.userId}</td>
                    <td>
                    <Button variant="primary" onClick={handleShow}>
                            See Comment
                        </Button>

                        <Modal1 show={show} onHide={handleClose} dialogClassName='modal-dialog modal-dialog-scrollable' >
                        <Modal1.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
                            <Modal1.Title>Tourist's Ratings and Comments </Modal1.Title>
                        </Modal1.Header>
                        <Modal1.Body style={{backgroundColor: "#e3ebf7"}}>
                            {item.description}
                                     
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
                       <DeleteJustReportButton ratingId={item.id} onDelete={deleteJustReportById}/>   
                    </td>
                    <td>    
                        <DeleteReportedButton ratingId={item.ratingId} onDelete={deleteReportedRatings}/>  
                    </td>
                    </tr>
                ))}
                </MDBTableBody>
            </MDBTable>
            <Pagination>
                {Array.from({ length: Math.ceil(reported.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>
 
        </div> 
  )
}

export default ReportedRatingList