import React, { useState } from 'react'
import { getRatingByTourId } from '../api/rating';
import Button from 'react-bootstrap/Button';
import Modal1 from 'react-bootstrap/Modal';
import Rating from './Rating'
import Spinner from 'react-bootstrap/Spinner';

function RatingModalButton( {id}) {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const handleClose = () => setShow(false);
    const [ratings, setRatings] = useState([]);
    const fetchtourrating = async (id) => {
            try {
                const token = localStorage.getItem('Token');
                const response = await getRatingByTourId(token , id);
                console.log(response);
                setRatings(response.data);
            } catch {
            console.log('error');
            }      
    }
    const handleShow = () => {
        setShow(true);
        fetchtourrating(id).then(() => {
          setIsLoading(false);
        });
    }
    
    return (
    <>
        <Button variant="primary" onClick={handleShow}>
            See Ratings
        </Button>

        <Modal1 show={show} onHide={handleClose} dialogClassName='modal-dialog modal-dialog-scrollable' >
        <Modal1.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal1.Title>Tour Ratings</Modal1.Title>
        </Modal1.Header>
        <Modal1.Body style={{backgroundColor: "#DCDCDC"}}>
        <div>{isLoading ? (
            <div className='text-center'><Spinner animation="border" variant="info" /></div>
          ) : (
            ratings.map((item, index) => (                 
                    <Rating touristName={item.tourist.username} value={item.value} comment={item.comment} />
                    
                )) )}</div>       
        </Modal1.Body>
        <Modal1.Footer style={{backgroundColor: "#F0F0F0"}}>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal1.Footer>
        </Modal1>
    </>
  )
}

export default RatingModalButton