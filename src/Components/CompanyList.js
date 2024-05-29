import React from 'react'
import { useState , useEffect } from 'react';
import Modal1 from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { getAllCompanies } from '../api/company'
import {Button, Form } from 'react-bootstrap';
import AddNewCompanyButton from './AddNewCompanyButton';

function CompanyList() {
    const [show, setShow] = useState(false);
    const [companies, setCompanies] = useState([]);
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

      const filteredData = companies.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.email.toLowerCase().includes(filter.toLowerCase()) ||
          item.address.toLowerCase().includes(filter.toLowerCase())
      );
    
      const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
    useEffect( () => {
        const fetchcompany = async () => {
            try {
                const token = localStorage.getItem('Token');
                const response = await getAllCompanies(token);
                console.log(response);
                setCompanies(response.data);
            } catch {
                console.log('error');
            }
            
          }
            fetchcompany();
    }, [])
   
      
  return (
    <div className='px-3'>       
              
            <div className='d-flex flex-row justify-content-between'>
                <h1 className='fw-bold text-dark'>Company List</h1>
                <div className='mt-2 me-3'><AddNewCompanyButton/></div>
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
              <th className='fw-bold'>Company Name</th>
              <th className='fw-bold'>Email</th>
              <th className='fw-bold'>Address</th>
              <th className='fw-bold'>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item,index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address} </td>
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

export default CompanyList