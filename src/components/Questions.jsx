import React, { useState } from 'react';
import Wrapper from './Wrapper';
import './../App.css'

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    singleCorrect: false,
    image: '',
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    singleCorrect: true,
    image:''
  },
];

const Questions = (props) => {
  const [index,setIndex] = useState(0);
  const [answer,setAnswer] = useState(null);

  const handleOptionChagne = (event) => {
    setAnswer(event.target.value);
  }

  const handleSubmit = () => {
    props.submitAnswer(answer);
    if(index < questions.length -1){
      setIndex(index +1);
      setAnswer(null);
    }
    else {
      props.finishQuiz();
    }
  }

  const question = questions[index];
  return (
    <div>
      <Wrapper>
        {/* top progress bar */}
        <div className="componentContainer">
          <div className="questionContainer">
            <h2>{question.question}</h2>
            {question.options.map((option, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={option}
                  name="option"
                  value={option}
                  checked={answer === option}
                  onChange={handleOptionChagne}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <button className="buttonAll next" onClick={handleSubmit}>Next</button>
        </div>
      </Wrapper>
    </div>
  );
}

export default Questions