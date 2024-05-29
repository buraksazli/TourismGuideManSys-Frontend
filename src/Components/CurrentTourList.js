import React from 'react'
import { useState , useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {getCurrentTours} from '../api/current_tours';
import TouristModalButton from './TouristModalButton';
import RatingModalButton from './RatingModalButton';
import TourType from '../enums/TourType'
import Regions from '../enums/Regions';
import { Table , Form } from 'react-bootstrap';

function CurrentTourList() {
    const [show, setShow] = useState(false);
    const [tour, setTour] = useState([]);
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

      const filteredData = tour.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.guide.username.toLowerCase().includes(filter.toLowerCase()) ||
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          TourType[item.tourType].name.toLowerCase().includes(filter.toLowerCase()) ||
          Regions[item.region].toLowerCase().includes(filter.toLowerCase())
      );
    
      const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);  
      useEffect( () => {
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
        fetchtour();
      },[]);
   
  return (
    <div className='px-3'>          
        <h1 className='fw-bold text-dark'>Ongoing Tours</h1>
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
            <th width="10">#</th>
                    <th width="170">Name</th>
                    <th width="170">Guide</th>
                    <th width="100">Type</th>
                    <th width="100">Region</th>
                    <th width="100">Date</th>
                    <th>Tourist List</th>
                    <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item,index) => (
              <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.guide.username}</td>
              <td><span className={`badge badge-${TourType[item.tourType].color} `}>{TourType[item.tourType].name}</span></td> 
              <td className='p-0 ps-4'>{Regions[item.region]}</td> 
              <td>{item.startDate}</td>                     
              <td><TouristModalButton id={item.id}/></td>
              <td>
                  <RatingModalButton id={item.id}/>
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

export default CurrentTourList