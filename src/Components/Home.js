import React from 'react'

import Nav from './Navbar'

import { useState  } from 'react';

import Table from 'react-bootstrap/Table';

import Pagination from 'react-bootstrap/Pagination';

function Home({ Toggle }) {   
    const data = [
        { id: 1, name: 'Örnek 1', value: 10 },
        { id: 2, name: 'Örnek 2', value: 20 },
        { id: 3, name: 'Örnek 3', value: 30 },
        { id: 4, name: 'Örnek 4', value: 30 },
        { id: 5, name: 'Örnek 5', value: 40 },
        { id: 6, name: 'Örnek 6', value: 50 },
        { id: 7, name: 'Örnek 7', value: 60 },
        { id: 8, name: 'Örnek 8', value: 70 },
        { id: 9, name: 'Örnek 9', value: 80 }
      ];
   
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(5); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (        
        <div className='px-3'>       
            <Nav Toggle={Toggle} />     
            <div className='container-fluid'>        
                <div className='row g-3 my-2'>    
                    <h1>Home</h1>
                    <div className='col-md-3 p-1'>         
                       <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>           
                            <div>                                
                                <h3 className='fs-2'>230</h3>                                
                                <p className='fs-5'>Guides</p>                            
                            </div>                       
                            <i className='bi bi-people-fill p-3 fs-1'></i>     
                       </div>              
                    </div>              
                    <div className='col-md-3 p-1'>             
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>         
                            <div>                     
                                <h3 className='fs-2'>245</h3>              
                                <p className='fs-5'>Tourists</p>                
                            </div>                   
                            <i className='bi bi-person-fill p-3 fs-1'></i>            
                        </div>                
                    </div>              
                    <div className='col-md-3 p-1'>           
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>      
                            <div>           
                                <h3 className='fs-2'>120</h3>          
                                <p className='fs-5'>Tours</p>            
                            </div>                
                            <i className='bi bi-globe-americas p-3 fs-1'></i>          
                        </div>                    
                    </div>                   
                    <div className='col-md-3 p-1'>                        
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>    
                            <div>                      
                                <h3 className='fs-2'>10</h3>              
                                <p className='fs-5'>Reported Ratings</p>          
                            </div>                
                                <i className='bi bi-exclamation-circle-fill p-3 fs-1'></i>          
                        </div>                
                    </div>      
                </div>        
            </div>
            <h1>Current Tours</h1>
            <Table  bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
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
    
export default Home