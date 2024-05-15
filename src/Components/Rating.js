import React from 'react'
import ReactStars from "react-rating-stars-component";

function Rating({touristName, value , comment})  {

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
              <b>{touristName}</b>
            </div>
            <button className='btn btn-danger h-25  '>Delete</button> 
          </div>

          <p>{comment}</p>          
        </div>
  )
}

export default Rating