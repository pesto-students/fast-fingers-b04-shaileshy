let dictionary = require('./data/dictionary.json');

const easyWord = () => {

};
const mediumWord = () => {

};
const hardWord = () => {

};
const getWord = () => {
    let word = {};
    let easyWord = [];
    let mediumWord = [];
    let hardWord = [];
    // let random = [];
    dictionary.map( (word) => {
        switch(word.length) {
            case 3:
            case 4:
            easyWord.push(word); 
            break;
            case 5:
            case 6:
            case 7:
            case 8:
            mediumWord.push(word)
            break;
            case 9:
            case 10:
            case 11:
            case 12:
            hardWord.push(word)
            break;
            default:
                break;

        }
        return {
            easy : easyWord
        }

        // if(word.length <= 4){
        //     easyWord.push(word);
        // }
        // else if(word.length > 4 && word.length < 9){
        //     mediumWord.push(word)
        // }
        // else{
        //     hardWord.push(word);
        // }
});
console.log(easyWord);
console.log(mediumWord);
console.log(hardWord);

const randomEasy = () => easyWord[Math.floor(Math.random() * easyWord.length)]; 

const randomMedium = () => mediumWord[Math.floor(Math.random() * mediumWord.length)]; 

const randomHard = () => hardWord[Math.floor(Math.random() * hardWord.length)]; 

//console.log(randomEasy());
//console.log(randomMedium());
//console.log(randomHard());

word.easy = randomEasy();
word.medium = randomMedium();
word.hard = randomHard();

return word;
}

export default {easyWord, mediumWord, hardWord}