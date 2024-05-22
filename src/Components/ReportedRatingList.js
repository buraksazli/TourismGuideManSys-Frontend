import React from 'react'
import Nav from './Navbar'
import Rating from './Rating';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import { useState , useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { getAllReportedRatings } from '../api/rating';
import { deleteReportedRating } from '../api/rating';
import DeleteReportedButton from './DeleteReportedButton';
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
   
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = reported.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='px-3'>       
            <Nav Toggle={Toggle} />     
            
            <h1>Reported Ratings</h1>
            <Table  hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Reported by</th>
                    <th>Reported Comment</th>
                    <th>Ignore/Delete</th>
                </tr>
                </thead>
                <tbody>
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
                        <Modal1.Body style={{backgroundColor: "#DCDCDC"}}>
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
                        <button type="button" class="btn btn-danger ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                            Ignore
                        </button>       
                        <DeleteReportedButton ratingId={item.ratingId} onDelete={deleteReportedRatings}/>

                    
                        
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
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