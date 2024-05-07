import React from 'react'
import Nav from './Navbar'
import Rating from './Rating'
import { useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';

import Table from 'react-bootstrap/Table';

import Pagination from 'react-bootstrap/Pagination';
function AdminList( {Toggle}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = [
        { id: 1, firstName: 'Örnek 1', lastName:'Sazlı' , username:'abc' , birthDate:'07/07/1999',phoneNumber: '5555555555' },
      { id: 2, firstName: 'Örnek 2', lastName:'Sazlı' ,username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  },
      { id: 3, firstName: 'Örnek 3',lastName:'Sazlı' , username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  },
      { id: 4, firstName: 'Örnek 4', lastName:'Sazlı' ,username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  },
      { id: 5, firstName: 'Örnek 5', lastName:'Sazlı' ,username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  },
      { id: 6, firstName: 'Örnek 6',lastName:'Sazlı' ,username:'abc' ,birthDate:'07/07/1999', phoneNumber: '5555555555'  },
      { id: 7, firstName: 'Örnek 7', lastName:'Sazlı' ,username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  },
      { id: 8, firstName: 'Örnek 8', lastName:'Sazlı' ,username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  },
      { id: 6, firstName: 'Örnek 6', lastName:'Sazlı' ,username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  },
      { id: 7, firstName: 'Örnek 7',lastName:'Sazlı' , username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555' },
      { id: 8, firstName: 'Örnek 8',lastName:'Sazlı' , username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  },
      { id: 9, firstName: 'Örnek 9',lastName:'Sazlı' , username:'abc' ,birthDate:'07/07/1999',phoneNumber: '5555555555'  }
      ];
   
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='px-3'>       
            <Nav Toggle={Toggle} />     
            <div className='d-flex flex-row justify-content-between'>
                <h1>User List</h1>
                <Button className='h-100 mt-3 me-3'>Add New</Button>
            </div>
            <Table responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Birth Date</th>
                    <th>Phone Number</th>                    
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.username}</td>
                    <td>{item.birthDate}</td>
                    <td>{item.phoneNumber}</td>
                     
                    
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination>
                {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>
 
        </div> 
  )
}

export default AdminList