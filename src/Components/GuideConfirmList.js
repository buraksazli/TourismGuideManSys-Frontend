import React from 'react'
import Nav from './Navbar'
import BiographyModalButton from './BiographyModalButton'
import { useState  } from 'react';

import Table from 'react-bootstrap/Table';

import Pagination from 'react-bootstrap/Pagination';
function GuideConfirmList({ Toggle }) {
    const data = [
        { id: 1, name: 'Örnek 1', value: 10 },
        { id: 2, name: 'Örnek 2', value: 20 },
        { id: 3, name: 'Örnek 3', value: 30 },
        { id: 4, name: 'Örnek 4', value: 30 },
        { id: 5, name: 'Örnek 5', value: 40 },
        { id: 6, name: 'Örnek 6', value: 50 },
        { id: 7, name: 'Örnek 7', value: 60 },
        { id: 8, name: 'Örnek 8', value: 70 },
        { id: 6, name: 'Örnek 6', value: 50 },
        { id: 7, name: 'Örnek 7', value: 60 },
        { id: 8, name: 'Örnek 8', value: 70 },
        { id: 9, name: 'Örnek 9', value: 80 }
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
            
            <h1>Guide Confirmation</h1>
            <Table  hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                        <BiographyModalButton/>
                    </td>
                    <td>    
                        <button type="button" class="btn btn-danger ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                            Reject
                        </button>       
                        <button type="button" class="btn btn-success ms-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                            </svg>
                            Confirm
                        </button>

                    
                        
                    </td>
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

export default GuideConfirmList