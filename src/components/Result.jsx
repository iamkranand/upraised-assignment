import React,{useEffect, useState} from 'react';
import Wrapper from './Wrapper';
import {GaugeComponent} from 'react-gauge-component';
import './../App.css'

const Result = (props) => {
  const [answer,setAnswer] = useState([])
  const [correct,setCorrect] = useState(0)
  const [incorrect,setIncorrect] = useState(0)

  useEffect(()=>{
    const fetchAnswer = async () => {
      try {
        const res = await fetch('http://localhost:3001/answer')
        const data = await res.json();
        setAnswer(data)
      } catch (error) {
        throw new Error('Error fetching Answers API')
      }
    };
	fetchAnswer();
  },[])
  useEffect(()=>{
	if(answer.length > 0){
		const calculate =() => {
			let correct = 0;
			let incorrect = 0;
			props.data.forEach(item => {
				const correctAnswer = answer.find(ans => ans.id === item.id)
				if(correctAnswer){
					if(arraysEqual(item.answer[0],correctAnswer.answer)){
						correct++;
					} else {
						incorrect++;
					}
				}
			})
			setCorrect(correct);
			setIncorrect(incorrect);
		}

		const arraysEqual = (arr1, arr2) => {
			if (arr1.length !== arr2.length) return false;
			return arr1.sort().every((value, index) => value === arr2.sort()[index]);
		  };
		calculate();
	}
  },[props.data,answer])
  const per = (correct/(correct + incorrect))*100;
  return (
    <>
      <Wrapper>
        <div className="componentContainer">
          <GaugeComponent
            value={per}
            type="radial"
            arc={{
              colorArray: ["#FF2121", "#00FF15"],
              gradient: true,
              width: 0.3,
              padding: 0.02,
              subArcs: [{ limit: 40 }, { limit: 60 }],
            }}
            pointer={{ type: "arrow", elastic: true }}
          />
          {/* show correct and incorrect count */}
          <div className="correct">
            <div className="resultContainer">
              <div className="bullet green"></div>
              <div>{correct}</div>
              <div>Correct</div>
            </div>
          </div>
          <div className="incorrect">
            <div className="resultContainer">
              <div className="bullet red"></div>
              <div>{incorrect}</div>
              <div>Incorrect</div>
            </div>
          </div>
		  {per <= 60 ? (<button className="buttonAll next" onClick={props.retake}>Start Again</button>) : ''}
          
        </div>
      </Wrapper>
    </>
  );
};

export default Result