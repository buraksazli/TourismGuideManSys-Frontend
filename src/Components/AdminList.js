import React from 'react'
import Nav from './Navbar'
import { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {getAllAdmins} from '../api/admin';
import AddNewAdminButton from './AddNewAdminButton';
import '../App.css'
function AdminList( {Toggle}) {
    const [show, setShow] = useState(false);
    const [admins, setAdmins] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
   
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = admins.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='px-3'>       
            <Nav Toggle={Toggle} />     
            <div className='d-flex flex-row justify-content-between'>
                <h1>Admin List</h1>
                <AddNewAdminButton/>
            </div>
            <MDBTable align='middle' className='border' style={{backgroundColor:"white" }}>
                <MDBTableHead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Birth Date</th>
                    <th>Phone Number</th>                    
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
                    <td>{item.phoneNumber}</td>
                     
                    
                    </tr>
                ))}
                </MDBTableBody>
            </MDBTable>
            <Pagination>
                {Array.from({ length: Math.ceil(admins.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>
 
        </div> 
  )
}

export default AdminList