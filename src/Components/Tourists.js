import React from 'react'
import Nav from './Navbar'
import Rating from './Rating'
import { useState , useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {getAllTourists} from '../api/tourist';
import TouristRatingModalButton from './TouristRatingModalButton';
import AddNewTouristButton from './AddNewTouristButton';
import BanButton from './BanButton';
import { deleteTouristById } from '../api/tourist';
import DeleteTouristButton from './DeleteTouristButton';
import { Table , Form } from 'react-bootstrap';

function Tourists( { Toggle }) {
    const [show, setShow] = useState(false);
    const [tourists, setTourists] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

      const filteredData = tourists.filter(
        (item) =>
          item.username.toLowerCase().includes(filter.toLowerCase()) ||
          item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
          item.lastName.toLowerCase().includes(filter.toLowerCase())
      );
    
      const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
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

  return (
    <div className='px-3 '>          
        <div className='d-flex flex-row justify-content-between'>
            <h1 className='fw-bold text-dark'>Tourist List</h1>
            <AddNewTouristButton/>
        </div>
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
                {paginatedData.map((item,index) => (
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

        </div> 
  )
}

export default Tourists