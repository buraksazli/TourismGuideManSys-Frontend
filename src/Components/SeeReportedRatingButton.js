import React from 'react'
import { Button, } from 'react-bootstrap';
import Modal1 from 'react-bootstrap/Modal';
import { useState , useEffect } from 'react';
import { getRatingByRatingId } from '../api/rating';
import Rating from './Rating'
import Spinner from 'react-bootstrap/Spinner';

function SeeReportedRatingButton({ratingId}) {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [isLoading, setIsLoading] = useState(true);
    const [rating,setRating] = useState();
  const fetchrating = async (id) => {
    try {
        const token = localStorage.getItem('Token');
        const response = await getRatingByRatingId(token , id);
        console.log(response.data.touristTours);
        setRating(response.data);
    } catch {
        console.log('error');
    }      
}

const handleShow = () => {
    setShow(true);
    fetchrating(ratingId).then(() => {
      setIsLoading(false);
    });
}


  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 2 18 16">
               <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            See Rating
        </Button>

        <Modal1 show={show} onHide={handleClose} dialogClassName='modal-dialog modal-dialog-scrollable' >
        <Modal1.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal1.Title>Tour Ratings</Modal1.Title>
        </Modal1.Header>
        <Modal1.Body style={{backgroundColor: "#e3ebf7"}}>
        <div>{isLoading ? (
            <div className='text-center'>
                    <Spinner animation="border" variant="info" />
            </div>
        ) : (
            rating.length === 0 ? (
                <p>There are no ratings!!!!!</p>
            ) : (
                rating.map((item, index) => (
                    <Rating 
                        key={index} 
                        ratingImages={item.ratingImages} 
                        touristName={item.tourist.username} 
                        value={item.value} 
                        comment={item.comment} 
                    />
                ))
            )
        )}</div>       
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

export default SeeReportedRatingButton