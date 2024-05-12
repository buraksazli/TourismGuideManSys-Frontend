import React from 'react'
import Nav from './Navbar'
import { useState , useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ModalButton from './ModalButton';
import Pagination from 'react-bootstrap/Pagination';
import {getCurrentTours} from '../api/current_tours';
function Home({ Toggle }) {   
    const data = [
        { id: 1, name: 'Örnek 1', value: 10, type: 'Urban',region:'Europe' },
        { id: 2, name: 'Örnek 2', value: 20, type: 'Urban',region:'Europe' },
        { id: 3, name: 'Örnek 3', value: 30, type: 'Urban',region:'Europe' },
        { id: 4, name: 'Örnek 4', value: 30, type: 'Urban',region:'Europe' },
        { id: 5, name: 'Örnek 5', value: 40, type: 'Urban' ,region:'Europe'},
        { id: 6, name: 'Örnek 6', value: 50, type: 'Urban',region:'Europe' },
        { id: 7, name: 'Örnek 7', value: 60, type: 'Urban',region:'Europe' },
        { id: 8, name: 'Örnek 8', value: 70, type: 'Urban',region:'Europe' },
        { id: 9, name: 'Örnek 9', value: 80, type: 'Urban',region:'Europe' }
      ];

      const [tour, setTour] = useState();
      async function fetchtour() {
        try {
            const token = localStorage.getItem('Token');
            const response = await getCurrentTours(token);
            console.log(response);
        } catch {
            console.log(localStorage.getItem('Token'))
            console.log('error');
        }
        
      }
      useEffect( () => {
        fetchtour();

      }, []);

      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(5); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (        
        <div className='px-3 '>
            <div className=''>     
            <Nav Toggle={Toggle} />  
            </div>
            <div>    
            <div className='container-fluid'>        
                <div className='row  '>    
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
            <Table responsive bordered hover>
                <thead>
                <tr>
                    <th width="10">#</th>
                    <th width="170">Name</th>
                    <th width="170">Guide</th>
                    <th width="100">Type</th>
                    <th width="100">Region</th>
                    <th width="100">Date</th>
                    <th width="10">Tourist List</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                    <td>{item.type}</td> 
                    <td>{item.region}</td> 
                    <td>{item.date}</td>                   
                    <td><ModalButton/></td>
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
        </div>    
        )
    }
    
export default Home