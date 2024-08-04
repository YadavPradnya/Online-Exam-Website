import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Question() {
  const questions = [
    { id: 1, question: '1.What is the capital of India?', options: ['a)Delhi', 'b)Mumbai', 'c)Kolkata', 'd)Chennai'] },
    { id: 2, question: '2.Who is the current Prime Minister of India?', options: ['a)Narendra Modi', 'b)Rahul Gandhi', 'c)Manmohan Singh', 'd)Amit Shah'] },
    { id: 3, question: '3.Who heads the RBI?', options: ['a)Shaktikanta Das', 'b)Raghuram Rajan', 'c)Urjit Patel', 'd)Duvvuri Subbarao'] },
    { id: 4, question: '4.Who created Bitcoin?', options: ['a)Satoshi Nakamoto', 'b)Vitalik Buterin', 'c)Charlie Lee', 'd)Gavin Andresen'] },
    { id: 5, question: '5.What is the currency of India?', options: ['a)Rupee', 'b)Dollar', 'c)Euro', 'd)Pound'] }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  const [remainingTime, setRemainingTime] = useState(20 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
      setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      alert('Time is up!');
      // You can add logic here to submit the answers or end the quiz
     
    }
  }, [remainingTime]);

  const Next = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const Previous = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const AnswerChange = (questionId, answer) => {
    const answers = [...answers];
    answers[questionId - 1] = answer;
    setAnswers(answers);
  };

  const current = questions[currentQuestionIndex];

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <Navbar />
      <div className='container1'>
      <div className='card2'>
        <div className='card-body'>

      
        <h1 className='question mt-5'>Question's</h1>
 
        <h3 className='date'>Time : {formatTime(remainingTime)}</h3>
        <p>{current.question}</p>
        
          {current.options.map((option, index) => (
            <p key={index}>
              <label>
                <input
                  type="radio" 
                  name={`question-${current.id}`}
                  value={option}
                  onChange={() => AnswerChange(current.id, option)}
                  checked={answers[current.id - 1] === option}
                />
                {option}
              </label>
            </p>
          ))}
       
        <button type="button" className="btn1 btn-success" onClick={Previous} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button type="button" className="btn2 btn-success" onClick={Next} disabled={currentQuestionIndex === questions.length - 1}>
          Next
        </button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Question;
