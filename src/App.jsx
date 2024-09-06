import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Questions from './components/Questions';
import Result from './components/Result';

function App() {
  const [screen,setScreen] = useState('welcome');
  
  function startQuiz (){
    setScreen('quiz')
  }

  function finishQuiz(){
    console.log('Quiz Finished');
    setScreen('result')
  }

  function submitAnswer(data){
    console.log('data submitted',data);
  }

  return (
    <>{screen === 'welcome' && (<Welcome startQuiz={startQuiz}></Welcome>)}
        {screen === 'quiz' && (<Questions submitAnswer = {(data) => submitAnswer(data)} finishQuiz={finishQuiz}></Questions>)}
        {screen === 'result' && (<Result></Result>)}   
    </>
  )
}

export default App
