import React from 'react'
import Nav from './Navbar'
import BiographyModalButton from './BiographyModalButton'
import { useState , useEffect  } from 'react';
import {confirmGuide,deleteGuideById,getAllGuides} from '../api/guide';
import { Table , Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import ConfirmGuideButton from './ConfirmGuideButton';
import DeleteGuideButton from './DeleteGuideButton';

function GuideConfirmList({ Toggle }) {
    const [show, setShow] = useState(false);
    const [guides, setGuides] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
          item.userId.toLowerCase().includes(filter.toLowerCase()) ||
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

  return (
    <div className='px-3'>              
        <h1 className='fw-bold text-dark'>Guide Confirmation</h1>

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
                    <th>Reject / Confirm</th>
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

export default GuideConfirmList