import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function Form() {
 
  const navigate = useNavigate();

 

  useEffect(() => {
    axios.post("http://192.168.1.24:80/api/register").then((response)=>console.log()).catch((error)=>console.log(error))

  }, []);
 
 
  const handleNext = () => {
  
    navigate('/Instruction');
  }
  return (
    <div>
      <Navbar/>
      <div className="container-fluid mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-white">
              <img src='https://img.freepik.com/free-photo/book-laptop-pencil-clock-wooden-table-library-education-learning-concept_1150-16628.jpg' alt="Background" />
            </div>
            <div className="col text-white">
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col  m-2">
                        <label className='label'>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your First Name"
                          name="firstname" required
                          style={{ borderColor:'black' }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col  m-2">
                        <label className='label'>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Last Name"
                          name="lastname" required
                          style={{ borderColor:'black' }}
                          require
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col  m-2">
                        <label className='label'>Education</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="education" required
                          name="education"
                          style={{ borderColor:'black' }}
                          require
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col  m-2">
                        <label className='label'>Mobile No.</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Mobile No." 
                          name="mobileno" required
                          style={{ borderColor:'black' }}
                           
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col m-2">
                        <label className='label'>E-mail</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your E-mail"
                          name="email"
                          style={{ borderColor:'black' }}
                          required
                        />
                      </div>
                    </div>
                    <div className="row m-2 mt-3">
                      <select id="dropdown" className='dropdown'>
                        <option value="option1">Select Test</option>
                        <option value="option2">Test1</option>
                        <option value="option3">Test2</option>
                      </select>
                    </div>
                    <button type="button" className="btn btn-dark mt-5" style={{ textAlign:'center' }} onClick={handleNext}>
                      Submitt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form;