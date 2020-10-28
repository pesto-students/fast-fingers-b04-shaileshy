import React, { useState } from 'react';
import './App.css';
import Left from './Left'
import Right from './Right'
import Center from './Center'

const App =  () => {
  const [ name, setName] = useState('');
  const [ level, setLevel] = useState('easy');
  const [ preStart, setPreStart] = useState(true);
  const [ start, setStart] = useState(false);
  const [ postStart, setPostStart] = useState(false);
  const [ stop, setStop] = useState(false);
  const [ error, setError] = useState(false);
  const [ score, setScore] = useState("00:00");


  const onNameChange = (val) => setName(val);
  const onLevelChange = (val) => setLevel(val);
  
  const onStart = () => {
    console.log('OnStart Call');
    if(name === ''){
      setError(true);
    }
    else {
      setError(false);
      setStart(true);
      setPreStart(false)
      setPostStart(false)
    }
  }

  const onStop = () => {
    console.log('OnStop Call');
    //debugger;
    setPostStart(true);
    setStart(false);
    setPreStart(false);

    setStop(true);
  } 

  const onQuit = () => {
    console.log('OnQuit Call');
    setScore("00:00");
  }
  
  return (
    <>
      <div className="App">
        <div
          className="left-25"
        >
          <Left
          name = {name}
          level = {level}
          onStop = {onStop}
          onQuit = {onQuit}
          start = {start}
          stop = {stop}

          />
        </div>
        <div
          className="center-50"
        >
          <Center
            name = {name}
            level = {level}
            preStart = {preStart}
            start = {start}
            postStart = {postStart}
            error = {error}
            onNameChange = {onNameChange}
            onLevelChange = {onLevelChange}
            onStart = {onStart}
            onStop = {onStop}
          /> 
        </div>
        <div
          className="right-25"
        >
          <Right
          start = {start}
          stop = {stop}
          score = {score}
          />
        </div>
      </div>
    </>
  );
};

export default App;