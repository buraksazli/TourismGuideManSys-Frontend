import React from 'react'
import Nav from './Navbar';
import Profileimg from '../assets/icons/profileimg.png'
import { Link } from 'react-router-dom'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  import ProfileImage from './ProfileImage'

function ProfileEdit({ Toggle }) {
    return (
        <div className='px-3'>
             <section >
      <MDBContainer >
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User Profile</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">Edit User Profile</a>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <div className='main'>
                <ProfileImage name='buraksazli'/></div>
                <h2 className=" text-dark mb-1 fw-bold">Burak Sazlı</h2>
                <p className="text-muted mb-1">@buraksazli</p>
                <p className="text-muted mb-1">Admin</p>
                <p className="text-muted mb-4">buraksazli@gmail.com</p>
                <div className="d-flex justify-content-center mb-2">
                  <Link to={'/Profile'}>
                  <MDBBtn>Back to Profile</MDBBtn>
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4 h-100">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <input className='w-75' type='text'></input>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input className='w-75' type='text'></input>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Username</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input className='w-75' type='text'></input>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input className='w-75' type='email'></input>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input className='w-75' type='text'></input>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Birth Date</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input className='w-75' type='date'></input>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="3">
                    
                  </MDBCol>
                  <MDBCol sm="6">
                  <button type='submit' className='btn btn-primary mt-3 w-100'>Submit</button>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
      </div>
      )
}

export default ProfileEdit