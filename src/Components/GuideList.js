import React from 'react'
import Nav from './Navbar'
import Rating from './Rating'
import { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
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
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
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

      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = guides.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div classNameName='px-3'>       
            <Nav Toggle={Toggle} />     
            <div className='d-flex flex-row justify-content-between'>
                <h1>Guide List</h1>
                <AddNewGuideButton/>
                
            </div>
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
                {currentItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.username}</td>
                    <td>{item.birthDate}</td>
                    <td><BiographyModalButton biography={item.biography}/></td>
                    <td>
                        <GuideRatingModalButton id={item.userId}/>
                    </td>
                    <td>
                    <DeleteGuideButton id={item.userId} onDelete={deleteGuide}/>
                    </td>
                    <td>
                     <BanButton username={item.username}/>
                    </td>    
                    
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination>
                {Array.from({ length: Math.ceil(guides.length / itemsPerPage) }).map((_, index) => (
                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </Pagination.Item>
                ))}
            </Pagination>
 
        </div> 
  )
}

export default GuideList