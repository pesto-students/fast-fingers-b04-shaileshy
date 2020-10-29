import React from 'react'
import Person from './assets/svgImage/Person'
import Cross from './assets/svgImage/Cross'
import Gamepad from  './assets/svgImage/GamePad'
//import Button from './component/Button'

const Left = ({name,level, onStop, onQuit, start, stop}) =>  {
    return (
        <>
        { start === true ? 
        <>
          <div
          className='heading-icon'
          >
            <Person/>
            {name}
          </div>

          <div
          className='heading-icon'
          >
            <Gamepad/>
            LEVEL: {level.toUpperCase()}
          </div>
        

          { stop === false ? 
          <div
            className='all-games'
          >
            <div
            className='sub-heading'
            >
              Score Board
            </div>
            <div
              className='player-score'
            >
              Game1 : 02:02
            </div>
          </div>
          : null }

          
          {
            stop === false ? 
            <button
              className='left-bottom'
              onClick={onStop}
              >
                <Cross/>
                Stop
            </button>
            :
            <button
              className='left-bottom'
              onClick={onQuit}
              >
                Quit
            </button>
          }
            



            

        </> : null }
        </>
      )
}

export default Left;