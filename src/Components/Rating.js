import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Rating({ratingImages , touristName, value , comment})  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
        <div className='border border-primary p-3 m-1 rounded d-flex flex-column bg-light'>
          <div className='d-flex flex-row justify-content-between'>
              <div>
                <ReactStars
                  count={5}
                  value={value}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
                <b>{touristName}</b></div>
                <div className='h-100'>
                  <button className='btn btn-danger h-25  '>Delete</button> 
                </div>
              
            </div>
            <div>
              {ratingImages.map((item, index) => (   
                  <>      
                    <Image onClick={handleShow}  className='p-1' key={index} src={`https://tourism-guide-man.azurewebsites.net/${item.imagePath}`} style={{ cursor: 'pointer', width: '60px', height: '60px' }}/>
                    <Modal show={show} onHide={handleClose} centered>
                      <Modal.Body>
                        <Image className='p-1' key={index} src={`https://tourism-guide-man.azurewebsites.net/${item.imagePath}`} style={{ width: '100%' }}/>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>    
                ))}
            </div>
            
          

          <p>{comment}</p>          
        </div>
  )
}

export default Rating