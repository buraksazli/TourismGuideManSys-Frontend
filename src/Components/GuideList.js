import React from 'react'
import Rating from './Rating'
import { useState , useEffect } from 'react';
import { Table , Form } from 'react-bootstrap';
import Modal1 from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import {deleteGuideById, getAllGuides} from '../api/guide';
import BiographyModalButton from './BiographyModalButton';
import GuideRatingModalButton from './GuideRatingModalButton';
import AddNewGuideButton from './AddNewGuideButton';
import BanButton from './BanButton';
import DeleteGuideButton from './DeleteGuideButton';

function GuideList( Toggle) {
    const [show, setShow] = useState(false);
    const [guides, setGuides] = useState([]);
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

      const filteredData = guides.filter(
        (item) =>
          item.username.toLowerCase().includes(filter.toLowerCase()) ||
          item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
          item.lastName.toLowerCase().includes(filter.toLowerCase())
      );
    
      const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
      useEffect( () => {
        const fetchguide = async () => {
            try {
                const token = localStorage.getItem('Token');
                const response = await getAllGuides(token, true);
                console.log(response);
                setGuides(response.data);
            } catch {
                console.log('error');
            }
            
          }
            fetchguide();
    }, [])

    const deleteGuide = async (userId) => {
        try {
          const token = localStorage.getItem('Token');
          await deleteGuideById(token , userId);
          setGuides(guides.filter(guide => guide.userId !== userId));
        } catch {
          console.log('error');
        } 
    }

  return (
    <div classNameName='px-3'>       
        <div className='d-flex flex-row justify-content-between'>
                <h1 className='fw-bold text-dark ps-3'>Guide List</h1>
                <div className='pe-3'> <AddNewGuideButton/></div>
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
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Birth Date</th>
                    <th>Biography</th>
                    <th>Comments</th>
                    <th>Delete</th>
                    <th>Ban</th>
                </tr>
            </thead>
            <tbody>
                {paginatedData.map((item,index) => (
               <tr key={index}>
               <td>{index + 1}</td>
               <td>{item.firstName}</td>
               <td>{item.lastName}</td>
               <td>{item.username}</td>
               <td>{item.birthDate}</td>
               <td><BiographyModalButton biography={item.biography}/></td>
               <td>
                   <GuideRatingModalButton id={item.userId}/>
               </td>
               <td>
               <DeleteGuideButton userId={item.userId} onDelete={deleteGuide}/>
               </td>
               <td>
                <BanButton username={item.username}/>
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

export default GuideList