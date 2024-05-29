import React from 'react'
import { useState , useEffect } from 'react';
import Modal1 from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import {getAllAdmins} from '../api/admin';
import AddNewAdminButton from './AddNewAdminButton';
import '../App.css'
import { Form } from 'react-bootstrap';

function AdminList( {Toggle}) {
    const [show, setShow] = useState(false);
    const [admins, setAdmins] = useState([]);
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

      const filteredData = admins.filter(
        (item) =>
          item.userId.toLowerCase().includes(filter.toLowerCase()) ||
          item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
          item.lastName.toLowerCase().includes(filter.toLowerCase())
      );
    
      const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
    useEffect( () => {
        const fetchadmin = async () => {
            try {
                const token = localStorage.getItem('Token');
                const response = await getAllAdmins(token);
                console.log(response);
                setAdmins(response.data);
            } catch {
                console.log('error');
            }
            
          }
            fetchadmin();
    }, [])
   
      
  return (
    <div className='px-3'>       
              
            <div className='d-flex flex-row justify-content-between'>
                <h1 className='fw-bold text-dark'>Admin List</h1>
                <div className='mt-2 me-3'><AddNewAdminButton/></div>
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
            <th className='fw-bold'>#</th>
              <th className='fw-bold'>Id</th>
              <th className='fw-bold'>Name</th>
              <th className='fw-bold'>Surname</th>
              <th className='fw-bold'>username</th>
              <th className='fw-bold'>Birth Date</th>
              <th className='fw-bold'>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item,index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.userId}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName} </td>
                <td>{item.username}</td>
                <td>{item.birthDate}</td>
                <td>{item.phoneNumber}</td>
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

export default AdminList