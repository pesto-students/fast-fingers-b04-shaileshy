import React from 'react'
import Person from './assets/svgImage/Person'
import Cross from './assets/svgImage/Cross'
import Button from './component/Button'

const Left = ({name,level, onStop, onQuit, start, stop}) =>  {
    return (
        <>
        { start === true ? 
        <>
          <div
          className='heading-medium'
          >
            <Person/>
            {name}
          </div>

          <div
          className='heading-medium'
          >
            <Cross/>
            LEVEL: {level}
          </div>
        

          { stop === false ? 
          <div
            className='all-games'
          >
            <div
            className='heading-small'
            >
              Score Board
            </div>

            <div>
              <Button
              text='Stop'
              onClick={onStop}
              />
            </div>

            
          </div>
          : <div>
          <Button
          text='Quit'
          onClick={onQuit}
          />
        </div> }


            

        </> : null }
        </>
      )
}

export default Left;