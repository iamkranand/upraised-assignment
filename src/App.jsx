import './App.css';
import { useState,useEffect } from 'react';
import Welcome from './components/Welcome';
import Questions from './components/Questions';
import Result from './components/Result';

function App() {
  const [screen,setScreen] = useState('welcome');
  const [questions,setQuestions] = useState([]);
  const [userInput,setUserInput] = useState([]);
  useEffect(()=>{
		const fetchQuestions = async () => {
			try {
				const res = await fetch('http://localhost:3000/data')
				const data = await res.json();
				setQuestions(data)
			} catch (error) {
				throw new Error('Error fetching Question API')
			}
		}

		fetchQuestions();
	},[])
  
  function startQuiz (){
    setScreen('quiz')
  }

  function finishQuiz(){
    setScreen('result')
  }

  function submitAnswer(data){
    setUserInput((prevState)=>[...prevState,data]);
  }
  function restartQuiz(){
    setUserInput([])
    setScreen('quiz')
  }
  function returnHome(){
    setScreen('welcome');
  }

  return (
    <>{screen === 'welcome' && (<Welcome startQuiz={startQuiz}></Welcome>)}
        {screen === 'quiz' && (<Questions submitAnswer = {(data) => submitAnswer(data)} finishQuiz={finishQuiz} questions={questions}></Questions>)}
        {screen === 'result' && (<Result data={userInput} retake = {restartQuiz} back={returnHome}></Result>)}   
    </>
  )
}

export default App
