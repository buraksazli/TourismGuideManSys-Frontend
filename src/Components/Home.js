import React from 'react'
import Nav from './Navbar'
import { useState , useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TouristModalButton from './TouristModalButton';
import Pagination from 'react-bootstrap/Pagination';
import {getCurrentTours} from '../api/current_tours';
function Home({ Toggle }) {   
      const [tour, setTour] = useState([]);
      
      useEffect( () => {
        const fetchtour = async () => {
        try {
            const token = localStorage.getItem('Token');
            const response = await getCurrentTours(token);
            console.log(response);
            setTour(response.data);
        } catch {
            console.log('error');
        }
        
      }
        fetchtour();
      },[]);

      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(5); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = tour.slice(indexOfFirstItem, indexOfLastItem);
    
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
                                <h3 className='fs-2'>{tour.length}</h3>          
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
                    <td>{item.guide.username}</td>
                    <td>{item.tourType}</td> 
                    <td>{item.region}</td> 
                    <td>{item.startDate}</td>                   
                    <td><TouristModalButton id={item.id}/></td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination>
                {Array.from({ length: Math.ceil(tour.length / itemsPerPage) }).map((_, index) => (
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