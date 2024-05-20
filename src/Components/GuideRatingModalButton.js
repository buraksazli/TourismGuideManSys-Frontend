import React, { useState , useEffect } from 'react'
import { getRatingByGuideId } from '../api/rating';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rating from './Rating'
import Spinner from 'react-bootstrap/Spinner';

export default function GuideRatingModalButton() {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const handleClose = () => setShow(false);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        if (show) {
          const fetchguiderating = async (id) => {
            try {
                console.log(id);
              const token = localStorage.getItem('Token');
              const response = await getRatingByGuideId(token, id);
              console.log(response);
              setRatings(response.data);
            } catch {
              console.log('error');
            } finally {
              setIsLoading(false);
            }
          };
    
          fetchguiderating(id);
        }
      }, [show, id]);
    
      const handleShow = () => {
        setIsLoading(true);
        setShow(true);
      };

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            See Ratings
        </Button>

        <Modal show={show} onHide={handleClose} dialogClassName='modal-dialog modal-dialog-scrollable' >
        <Modal.Header style={{backgroundColor: "#F0F0F0"}} closeButton>
            <Modal.Title>Tour Ratings</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#DCDCDC"}}>
        <div>{isLoading ? (
            <div className='text-center'><Spinner animation="border" variant="info" /></div>
          ) : (
            ratings.map((item, index) => (                 
                    <Rating key={index}  touristName={item.tourist.username} value={item.value} comment={item.comment} />
                    
                )) )}</div>       
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#F0F0F0"}}>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}
