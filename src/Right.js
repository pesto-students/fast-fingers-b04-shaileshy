import React from 'react'

const Right = ( {start, stop, score} ) => {
    return (
        <>
        { start === true ?
        <>
            <div
            className = 'heading-medium'
            >
                fast fingers
            </div>
            { stop === false ? 
                <div
                className = 'heading-medium'>
                    SCORE: {score}
                </div>
            : null }
        </>
        : null }

        </>
    )
}
export default Right
