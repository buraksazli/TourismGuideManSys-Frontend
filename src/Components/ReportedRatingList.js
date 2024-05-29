import React from 'react'
import Rating from './Rating';
import Modal1 from 'react-bootstrap/Modal';
import { useState , useEffect } from 'react';
import { Button,Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { getAllReportedRatings } from '../api/rating';
import { deleteJustReport, deleteReportedRating } from '../api/rating';
import DeleteReportedButton from './DeleteReportedButton';
import DeleteJustReportButton from './DeleteJustReportButton';
import SeeReportedRatingButton from './SeeReportedRatingButton';

function ReportedRatingList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reported, setReported] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = reported.filter(
    (item) =>
      item.userId.toLowerCase().includes(filter.toLowerCase()) ||
      item.description.toLowerCase().includes(filter.toLowerCase()) 
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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

  const deleteReportedRatings = async (ratingId , id) => {
    try {
        const token = localStorage.getItem('Token');
        await deleteReportedRating(token , ratingId);
         setReported(reported.filter(reported => reported.id !== id));
    } catch {
        console.log('error');
    } 
  }

  const deleteJustReportById = async (ratingId) => {
    try {
      const token = localStorage.getItem('Token');
      await deleteJustReport(token , ratingId);
      setReported(reported.filter(reported => reported.id !== ratingId));  
    } catch (error) {
      console.log(error);
    } 
  }
   
  return (
    <div className='px-3 '>          
            
      <h1 className='fw-bold text-dark'>Reported Ratings</h1>

      <div className="container mt-2">
        <Form.Control
          type="text"
          placeholder="Filter..."
          value={filter}
          onChange={handleFilterChange}
          className="mb-2"
        />
        <Table responsive hover>
          <thead>
            <tr>
              <th className='fw-bold'>Reported By</th>
              <th className='fw-bold'>Report</th>
              <th className='fw-bold'>Comment</th>
              <th className='fw-bold'>Ignore/Delete</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.description}</td>
                <td>
                  <SeeReportedRatingButton ratingId={item.ratingId}/>
                        </td>
                <td>
                  <DeleteJustReportButton ratingId={item.id} onDelete={deleteJustReportById}/>
                  <DeleteReportedButton ratingId={item.ratingId} id={item.id} onDelete={deleteReportedRatings}/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
  



            {/*<div className="container  mt-1">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    value={filter}
                    onChange={handleFilterChange}
                  />
                </InputGroup>

                <Table  hover>
                  <thead>
                    <tr>
                      <th>Reported By</th>
                      <th>Report</th>
                      <th>Comment</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentReports.map((item,index) => (
                      <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.description}</td>
                        <td><Button variant="primary" onClick={handleShow}>
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
                        </Modal1></td>
                        <td>
                        <DeleteJustReportButton ratingId={item.id} onDelete={deleteJustReportById}/>
                        <DeleteReportedButton ratingId={item.ratingId} onDelete={deleteReportedRatings}/> 
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <Pagination>
                  {[...Array(totalPages).keys()].map(number => (
                    <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => handlePageChange(number + 1)}>
                      {number + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </div>
            {/*<MDBTable align='middle' className='border' style={{backgroundColor:"white" }}>
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
            </Pagination> */}
 
        </div> 
  )
}

export default ReportedRatingList