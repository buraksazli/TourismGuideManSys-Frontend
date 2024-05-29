import React from 'react'
import Nav from './Navbar'
import { useState , useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import TouristModalButton from './TouristModalButton';
import Pagination from 'react-bootstrap/Pagination';
import {getCurrentTours} from '../api/current_tours';
import '../App.css'
import TourType from '../enums/TourType'
import Regions from '../enums/Regions';
import TourImage from '../enums/TourImage';
import { getDashboardInfos } from '../api/dashboard';
import { Link } from 'react-router-dom';


function Home({ Toggle }) {   
      const [tour, setTour] = useState([]);
      const [dashboard, setDashboard] = useState({
        totalNonVerifiedGuides: 0,
        totalReports: 0,
        totalTourists: 0,
        totalTours: 0,
        totalVerifiedGuides: 0
      });
          
    const fetchtour = async () => {
        try {
            const token = localStorage.getItem('Token');
            const response = await getCurrentTours(1,token);
            console.log(response);
            setTour(response.data);
            
        } catch {
            console.log('error');
        }
        
      }

      const getDashboard = async () => {
        try {
            const token = localStorage.getItem('Token');
            const response = await getDashboardInfos(token);
            console.log(response);
            setDashboard({
                totalNonVerifiedGuides: response.totalNonVerifiedGuides,
                totalReports: response.totalReports,
                totalTourists: response.totalTourists,
                totalTours: response.totalTours,
                totalVerifiedGuides: response.totalVerifiedGuides
              });
        } catch (error){
            console.log(error);
        }
        
      }

      
      useEffect(()  => {
         getDashboard();
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
            <div>    
            <div className='' style={{color:"007BFF "}}>                      
                <div className='row '>
                    <div className='d-flex flex-md-row flex-column justify-content-between'>
                    <h1 className='fw-bold text-dark'>Home</h1>
                    <div className='d-flex flex-md-row flex-column text-center mb-2 mt-2'>
                        
                        <div className='me-2 '>
                            <span className="badge badge-success w-100 fs-6 p-2 ">Guide Confirmation Requests </span><span className="badge rounded-pill badge-notification bg-danger">{dashboard.totalNonVerifiedGuides}</span>
                        </div>
                        <div className=''>
                            <span className="badge badge-danger w-100 fs-6 p-2"> Reported Ratings </span><span className="badge rounded-pill badge-notification bg-danger">{dashboard.totalReports}</span>
                        </div>
                    </div></div>
                    
                    <div className='col-md-3 p-1'>     
                             <div className='   ' >       
                                 <div className='d-flex text-center rounded-top- justify-content-between align-items-center p-4 ' style={{backgroundColor:"#e3ebf7"}} > 
                                    <i className='bi bi-people-fill fs-1 ps-3' style={{color:"#289fe0"}}></i>
                                    <div className='d-flex flex-column'>                     
                                        <span className='fs-2 text-dark pe-3 '><b>{dashboard.totalVerifiedGuides}</b></span>
                                        <span>Total Guides</span>  </div>              
                                    </div> 
                                    <Link to="/guide"> 
                                        <div className='text-dark  ps-2 pe-2 d-flex justify-content-between' style={{backgroundColor:"#d1d9ed"}}>           
                                            See more <i className="bi bi-caret-right"></i>
                                        </div>
                                    </Link>          
                             </div>                
                         </div> 

                         <div className='col-md-3 p-1'>     
                             <div className='   rounded-5' >       
                                 <div className='d-flex text-center justify-content-between align-items-center p-4 ' style={{backgroundColor:"#e3ebf7"}} > 
                                    <i className='bi bi-person-fill fs-1 ps-3' style={{color:"#289fe0"}}></i>
                                    <div className='d-flex flex-column'>                     
                                        <span className='fs-2 text-dark pe-3 ' style={{color:"#285192"}}><b>{dashboard.totalTourists}</b></span>
                                        <span>Total Tourists</span>  </div>              
                                    </div>    
                                    <Link to="/tourists">  
                                        <div className='text-dark  ps-2 pe-2 d-flex justify-content-between' style={{backgroundColor:"#d1d9ed"}}>           
                                            See more <i className="bi bi-caret-right"></i>
                                        </div>            
                                    </Link> 
                             </div>                
                         </div> 

                         <div className='col-md-3 p-1'>     
                             <div className='   rounded-5' >       
                                 <div className='d-flex text-center justify-content-between align-items-center p-4 ' style={{backgroundColor:"#e3ebf7"}} > 
                                    <i className='bi bi-globe-americas fs-1 ps-3' style={{color:"#289fe0"}}></i>
                                    <div className='d-flex flex-column'>                     
                                        <span className='fs-2 text-dark pe-3 ' style={{color:"#285192"}}><b>{dashboard.totalTours}</b></span>
                                        <span>Total Tours</span>  </div>              
                                    </div>  
                                    <Link to="/tours">     
                                        <div className='text-dark  ps-2 pe-2 d-flex justify-content-between' style={{backgroundColor:"#d1d9ed"}}>           
                                            See more <i className="bi bi-caret-right"></i>
                                        </div>     
                                     </Link>    
                             </div>                
                         </div> 

                         <div className='col-md-3 p-1'>     
                             <div className='   rounded-5' >       
                                 <div className='d-flex text-center justify-content-between align-items-center p-4 ' style={{backgroundColor:"#e3ebf7"}} > 
                                    <i className='bi bi-building-fill fs-1 ps-3' style={{color:"#289fe0"}}></i>
                                    <div className='d-flex flex-column'>                     
                                        <span className='fs-2 text-dark pe-3 ' style={{color:"#285192"}}><b>2</b></span>
                                        <span>Total Companies</span>  </div>              
                                    </div> 
                                    <Link to="/companies"> 
                                        <div className='text-dark  ps-2 pe-2 d-flex justify-content-between' style={{backgroundColor:"#d1d9ed"}}>           
                                            See more <i className="bi bi-caret-right"></i>
                                        </div> 
                                    </Link>              
                             </div>                
                         </div> 

                    

                                           
                         
                </div>        
            </div>
            <h1 className='mt-4 fw-bold text-dark'>Ongoing Tours</h1>
            <div className="row d-flex flex-row ">
            {currentItems.slice(0, 3).map((item, index) => (
                    <div className="col-12 col-md-3">
                    <div className="card  ">
                    <img src={TourImage[item.region]} className="card-img-top" width="200" height="160" alt="Hollywood Sign on The Hill"/>
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title fw-bold w-50 text-center rounded-5 p-1" style={{color:"white" , backgroundColor:"#f36944"}}>{item.name}</h5>
                            <span className={`h-100 badge badge-${TourType[item.tourType].color} p-1`}>{TourType[item.tourType].name}</span>
                            <span className={`h-100 badge badge-success p-1`}>{item.price} $</span>
                        </div>
                        <p className="card-text">
                            <div className='d-flex flex-column'>
                                <div>
                                    <i className='bi bi-people fs-5 me-2' style={{ color:"#2F5695" }}></i>
                                    <span>{item.guide.username}</span> 
                                </div>
                                <div>
                                <i class="bi bi-globe me-2" style={{ color:"#2F5695" }}></i>
                                <span>{Regions[item.region]}</span>
                                </div>
                                <TouristModalButton id={item.id}/>
                        </div>
                        </p>
                    </div>
                    </div>
                </div>
                ))}
                
                <div className='col-2 justify-content-center align-items-center m-auto d-flex'> 
                  <Link to="/currentTours">   <button className='btn btn-secondary fs-4'>See All <i class="bi bi-arrow-right-circle fs-4  "></i></button></Link> 
                </div>
                
                
  
            </div>
            
            {/*<MDBTable align='middle'  className='border' style={{backgroundColor:"white"}}>
                <MDBTableHead  >
                <tr >
                    <th width="10">#</th>
                    <th width="170">Name</th>
                    <th width="170">Guide</th>
                    <th width="10">Type</th>
                    <th width="10">Region</th>
                    <th width="100">Date</th>
                    <th width="50">Tourist List</th>
                </tr>
                </MDBTableHead>
                <MDBTableBody  >
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.guide.username}</td>
                    <td > <span className={`badge badge-${TourType[item.tourType].color} p-1`}>{TourType[item.tourType].name}</span></td> 
                    <td className='p-0 ps-4'>{Regions[item.region]}</td> 
                    <td>{item.startDate}</td>                   
                    <td><TouristModalButton id={item.id} />
                    </td>
                    </tr>
                ))}
                </MDBTableBody>
            </MDBTable>
            <Pagination>
                {Array.from({ length: Math.ceil(tour.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>*/}
                    </div> 
                    
        </div> 
        
        )
    }
    
export default Home