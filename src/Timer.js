import React, {useEffect } from 'react'

const Timer = ({timerUp, score, onUpdateScore, onTimerUpdate}) =>  {
      
    useEffect(() => {
        let interval = null;
        if (timerUp) {
          interval = setInterval(() => {
            onUpdateScore(score => score + 1);
          }, 1000);
        } else if (!timerUp && score !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerUp, score, onUpdateScore]);


    return (
    <div className="">
      <div className="time" style={{'color': 'white'}}>
        {score}s
      </div>
    </div>
    )
}

export default Timer
