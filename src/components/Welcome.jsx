import React from 'react';
import './../App.css'

const Welcome = (props) => {
  return (
    <div className='App'>
        <div className='logo'>upraised</div>
        <div className='quiztext'>Quiz</div>
        <div className='startButton'>
            <button className='buttonAll' onClick={props.startQuiz}>Start</button>
        </div>
    </div>
  )
}

export default Welcome;