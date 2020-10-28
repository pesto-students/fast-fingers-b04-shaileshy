import React, {useState, useCallback, useEffect} from 'react'
import './assets/css/center.css'
import Keyboard from './assets/svgImage/Keyboard'
import Play from './assets/svgImage/Play'
//import Input from './component/Input/index'
import Select from './component/Select/index'
import Button from './component/Button/index'
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


const  Center = ({name, level, preStart, start, postStart , error, onNameChange, onLevelChange, onStart}) => {
    const [word, setWord] = useState({
        easy: '',
        medium: '',
        hard: ''
    });
    const [currentWord, setCurrentWord] = useState('start');
    const [typeWord, setTypeWord] = useState('')

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



    // const getWord = useCallback(() =>  {
    //     console.log('getWord called');
    //     // debugger;
    //     let text = word[level][Math.floor(Math.random() * word[level].length)];
    //     return setCurrentWord(text);
    // }, [word,level, start]);


    const onTextChange = (val) => setTypeWord(val);

    return (
        <>
         {preStart ? <div 
            className='center'
        >
            <Keyboard/>

            <div
            className='title'
            >
            fast fingers
            </div>

            <div
            className="subTitle"
            > 
            -------- The Ultimate Typing Game  ---------
            </div>

            <input 
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

            { error ? <div> Please Enter Name </div> : '' }

            <Button
            text = "Start Game"
            onClick = {onStart}
            >
                <Play/>
            </Button>
        </div>  : null }         
            
         {start ? 
         <div>
            <h2>{currentWord}</h2>
            <input 
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
          <div>
              Quit Time
          </div> 
        : null}
        </>
    )
}

export default Center