import React, {useState, useCallback, useEffect} from 'react'
import './assets/css/center.css'
import Keyboard from './assets/svgImage/Keyboard'
import Play from './assets/svgImage/Play'
import Replay from './assets/svgImage/Reload'
// import Input from './component/Input/index'
import Select from './component/Select/index'
// import Button from './component/Button/index'
let dictionary = require('./data/dictionary.json');

const getAllWord = () => {
    console.log('getAllWord Called')
    let word = {}
    word.easy = [];
    word.medium = [];
    word.hard = [];

    dictionary.map( (content) => {
        switch(content.length) {
            case 3:
            case 4:
                word.easy.push(word); 
            break;
            case 5:
            case 6:
            case 7:
            case 8:
                word.medium.push(word)
            break;
            case 9:
            case 10:
            case 11:
            case 12:
                word.hard.push(word)
            break;
            default:
                break;

        }
        return null
    });
    console.log(word);

    return word;
};


const  Center = ({name, level, preStart, start, stop, postStart,
     error, onNameChange, onLevelChange, onStart, score, onReplay}) => {
    const [word, setWord] = useState({
        easy: [],
        medium: [],
        hard: []
    });
    const [currentWord, setCurrentWord] = useState('start');
    const [typeWord, setTypeWord] = useState('')


    const getWord = useCallback(() =>  {
        console.log('getWord called');
        // debugger;
        let text = word[level][Math.floor(Math.random() * word[level].length)];
        return setCurrentWord(text);
    }, [word, level]);

    useEffect ( () => {
        if(word.easy.level  === 0){
            setWord(getAllWord());
            getWord();
        }
    }, [word, getWord])



    // const matchWord = useCallback( (e) => {
    //     console.log('mach Word Call')
    //     //setTypeWord(e.target.value)
    //     if(word === e.target.value){
    //         setWord(getWord().easyWord)
    //     }
    //     else{
    //         console.log('Not Matched')
    //     }
    // }, [word])

    // const enterWord = useCallback(() => {
    //     setWord(getAllWord);
    // }, [start])



    


    const onTextChange = (val) => setTypeWord(val);

    return (
        <>
         {preStart === true ? <div 
            className='center'
        >
            <Keyboard/>

            <div
            className='heading'
            >
            fast fingers
            </div>

            <div
            className="sub-heading"
            > 
            -------- The Ultimate Typing Game  ---------
            </div>

            <input 
                placeholder="Type Your Name"
                value={name}
                onChange={(e) =>onNameChange(e.target.value) }
            />

            {/* <Input
                value = {name}
                onChange = {onNameChange}
            /> */}

            <Select
            level={level}
            onLevelChange={onLevelChange}
            />

            { error ? <div className="error"> Please Enter Name </div> : '' }


            <button
                onClick ={onStart}
            >
                <Play/>
                Start Game
            </button>


            {/* <Button
            text = "Start Game"
            onClick = {onStart}
            >
                <Play/>
            </Button> */}
        </div>  : null }         
            
         {start === true && stop === false ? 
         <div>
            <h2 className='current-word'>{currentWord}</h2>
            <input 
                style={{'textAlign': 'center'}}
                value={typeWord}
                onChange={(e) =>onTextChange(e.target.value) }
            />
            {/* <Input
            value={typeWord}
            onChange={onTextChange}
            /> */}
         </div>
        : null }

          {postStart ? 
          <>
          <div>
            <div
            className='score-game'
                >
                Score : Game 5
            </div> 
            <div
            className='total-score'
                >
                {score}
            </div> 
            <button
            onClick = {onReplay}
            >
                <Replay/>
                &nbsp; Play Again
            </button>
          </div>
          </>

        : null}
        </>
    )
}

export default Center