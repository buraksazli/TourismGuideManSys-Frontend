import React, { useState , useEffect } from 'react'
import { getRatingByTouristId } from '../api/rating';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rating from './Rating'
import Spinner from 'react-bootstrap/Spinner';

function TouristRatingModalButton({id}) {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const handleClose = () => setShow(false);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        if (show) {
          const fetchtouristrating = async (id) => {
            try {
                console.log(id);
              const token = localStorage.getItem('Token');
              const response = await getRatingByTouristId(token, id);
              console.log(response);
              setRatings(response.data);
            } catch {
              console.log('error');
            } finally {
              setIsLoading(false);
            }
          };
    
          fetchtouristrating(id);
        }
      }, [show, id]);
    
      const handleShow = () => {
        setIsLoading(true);
        setShow(true);
      };

  return (
    <>
        <Button variant="success" onClick={handleShow} className='text-light'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 2 18 16">
               <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            See Ratings
        </Button>

        <Modal show={show} onHide={handleClose} dialogClassName='modal-dialog modal-dialog-scrollable' >
        <Modal.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal.Title>Tour Ratings</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#e3ebf7"}}>
        <div>{isLoading ? (
            <div className='text-center'>
                    <Spinner animation="border" variant="info" />
            </div>
        ) : (
            ratings.length === 0 ? (
                <p>There are no ratings!!!!!</p>
            ) : (
                ratings.map((item, index) => (
                    <Rating 
                        key={index} 
                        id={item.id}
                        ratingImages={item.ratingImages} 
                        touristName={item.tourist.username} 
                        value={item.value} 
                        comment={item.comment} 
                    />
                ))
            )
        )}</div>       
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#F0F0F0"}}>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}

export default TouristRatingModalButton