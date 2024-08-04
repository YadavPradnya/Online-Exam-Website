import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Instructions =()=>{
  

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/question');
  }
    return(
        <>
        <Navbar/>
<div className="container3 mt-5">
<div className="card5 m-5">
    <div classname="card-body m-5"> 
    <h1 className='page mt-5 p-5' style={{textAlign:'center', color:'white' }}> INSTRUCTION'S</h1>
      <div classname="list " style={{ marginLeft:'15%' }}>
        <ul className='list-group'>
          <li>Welcome to Online Exam for General Apttitude Exam.</li>
          <li>Exam has total 5 questions.</li>
          <li>Total Time for Exam is 20 minutes</li>
          <li>Negative Marketing Exam. No</li>
        </ul>
        <h3 className='luck mt-3' style={{ color:'white' }}>Best of Luck For Your Exam</h3>
    

      </div>
      <button type="button" className="btn3 btn-success mt-5 mx-auto-d-block"  onClick={handleNext}>
  NEXT
</button>
    </div>
  </div>
</div>

        </>
    )
}
export default Instructions;