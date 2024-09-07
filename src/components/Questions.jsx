import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './../App.css'



const Questions = (props) => {
	const [index,setIndex] = useState(0);
	const [answer,setAnswer] = useState([]);
	const questions = props.questions;
	

  const handleOptionChagne = (value) => {
	if (!question.singleCorrect) {
		setAnswer((prevState) => {
			if(prevState.includes(value)){
				return prevState.filter(opt => opt !== value)
			}
			else {
				return [...prevState,value];
			}
		})
	} else {
		setAnswer(() =>[value])
	}
  }

  const handleSubmit = () => {
    props.submitAnswer({id: question.id, answer: [answer]});
    if(index < questions.length -1){
      setIndex(index +1);
      setAnswer([]);
    }
    else {
      props.finishQuiz();
    }
  }

  const question = questions[index];
  const val  = ((index+1) / (questions.length)) * 100;
  return (
    <div>
      <Wrapper>
        {/* top progress bar */}
        <div className='progressBar'>
          <CircularProgressbar
            value={val}
            text={`${index + 1}/${questions.length}`}
            styles={buildStyles({
              pathColor: "#287C37",
              pathTransitionDuration: 1,
              trailColor: "#E0E0E0",
            })}
          />
        </div>
        <div className="componentContainer">
          <div className="questionContainer">
            <h2>{question.question}</h2>
			{question.image!==null && (
				<img src={question.image} className='questionImage' />
			)}
            {question.options.map((option, idx) => (
              <div key={idx} className='options'>
                <input
                  type={question.singleCorrect === true ? 'radio' : 'checkbox'}
                  name="option"
                  value={option}
                  checked={answer.includes(option)}
                  onChange={()=>handleOptionChagne(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <button className="buttonAll next" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

export default Questions