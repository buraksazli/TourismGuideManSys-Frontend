import React from 'react'
import Nav from './Navbar'
import BiographyModalButton from './BiographyModalButton'
import { useState , useEffect  } from 'react';
import {confirmGuide,deleteGuideById,getAllGuides} from '../api/guide';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import Pagination from 'react-bootstrap/Pagination';
import ConfirmGuideButton from './ConfirmGuideButton';
import DeleteGuideButton from './DeleteGuideButton';
function GuideConfirmList({ Toggle }) {
    const [show, setShow] = useState(false);
    const [guides, setGuides] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
      useEffect( () => {
        const fetchguide = async () => {
            try {
                const token = localStorage.getItem('Token');
                const response = await getAllGuides(token, false);
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

    const confirmGuideById = async (userId) => {
        try {
            const token = localStorage.getItem('Token');
            const response = await confirmGuide(token , userId, true);
            console.log(response.data);
            setGuides(guides.filter(guide => guide.userId !== userId));
        } catch (error){
            console.log(error);
            }   
    }

      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(8); 
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = guides.slice(indexOfFirstItem, indexOfLastItem);
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='px-3'>       
            <Nav Toggle={Toggle}/>     
            
            <h1>Guide Confirmation</h1>
            <MDBTable align='middle' className='border' style={{backgroundColor:"white" }}>
                <MDBTableHead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Birth Date</th>
                    <th>Biography</th>
                    <th>Reject / Confirm</th>
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
                    <td>
                        <BiographyModalButton biography={item.biography}/>
                    </td>
                    <td>    
                        <DeleteGuideButton userId={item.userId} onDelete={deleteGuide}/>
                        </td>  <td>
                        <ConfirmGuideButton userId={item.userId} onSubmitFunc={confirmGuideById}/>
  
                    </td>
                    </tr>
                ))}
                </MDBTableBody>
            </MDBTable>
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

export default GuideConfirmList