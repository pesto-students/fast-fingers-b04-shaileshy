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
  
  const [ score, setScore] = useState(0);
  const [ timerUp, setTimerUp] = useState(true)


  const onUpdateScore = (val) => setScore(val);
  const onTimerUpdate = (val) => setTimerUp(val);

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
    setStop(true);
    setPostStart(true);
    setPreStart(false);
  } 

  const onReplay = () => {
    console.log('onReplay call');
    setLevel('easy');
    setStart(true);
    setScore(0);
    setTimerUp(true);
    setPostStart(false);
    setStop(false);
  }

  const onQuit = () => {
    console.log('OnQuit Call');
    setName('');
    setLevel('easy');
    setPreStart(true);
    setStart(false);
    setPostStart(false);
    setStop(false);
    setError(false);
    setScore(0);
    setTimerUp(true);
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
            stop = {stop}
            postStart = {postStart}
            error = {error}
            onNameChange = {onNameChange}
            onLevelChange = {onLevelChange}
            onStart = {onStart}
            onStop = {onStop}
            score = {score}
            onReplay = {onReplay}
          /> 
        </div>
        <div
          className="right-25"
        >
          <Right
          start = {start}
          stop = {stop}
          score = {score}
          timerUp = {timerUp} 
          onUpdateScore = {onUpdateScore}
          onTimerUpdate = {onTimerUpdate}

          />
        </div>
      </div>
    </>
  );
};

export default App;