import React from 'react'
import Timer from './Timer'


const Right = ( {start, stop, score, timerUp, onUpdateScore, onTimerUpdate} ) => {
    return (
        <>
        { start === true ?
        <>
            <div
            className = 'heading-icon'
            >
                fast fingers
            </div>
            { stop === false ? 
                <div
                className = 'heading-icon'>
                    SCORE: 
                    <Timer
                        timerUp={timerUp}
                        score={score}
                        onUpdateScore={onUpdateScore}
                        onTimerUpdate={onTimerUpdate}
                    />
                </div>
            : null }
        </>
        : null }

        </>
    )
}
export default Right
