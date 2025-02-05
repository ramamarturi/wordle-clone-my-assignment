import {Component} from 'react' 
import './index.css'

const words = ["Apple", "Grape", "Mango", "Lemon", "Berry","House","Water","Chair","Smile","Light","Happy","Tiger","Table","River","Cloud","Music","Dance","Green","Party","Heart","Peace","Sugar"];

const targetWord = words[Math.floor(Math.random() * words.length)].toLowerCase()

class GameBoard extends Component {
    state = {firstWord:'',secondWord:'',thirdWord:'',fourthWord:'',fifthWord:'', result:'', isSubmited: false, isDarkMood: false }
    onEnterFirstWord = (event) => {
       this.setState({firstWord: event.target.value.toLowerCase()})
    }
    onEnterSecondWord = (event) => {
        this.setState({secondWord: event.target.value.toLowerCase()})
    }
    onEnterThirdWord = (event) => {
        this.setState({thirdWord: event.target.value.toLowerCase()})
    }
    onEnterFourthWord = (event) => {
        this.setState({fourthWord: event.target.value.toLowerCase()})
    }
    onEnterFifthWord = (event) => {
        this.setState({fifthWord: event.target.value.toLowerCase()})
    }
    onSubmitTheAnswer = () => {
        const {firstWord,secondWord,thirdWord,fourthWord,fifthWord} = this.state
        const finalWord = firstWord+secondWord+thirdWord+fourthWord+fifthWord 
        if (finalWord === targetWord) {
            this.setState({result: '🎉 Congratulations You Won! 🎉', isSubmited: true})
        } else {
            this.setState({result: '❌ You Lost The Game! ❌', isSubmited: true})
        }
    }
    
    onResetGame = () => {
        this.setState({firstWord:'',secondWord:'',thirdWord:'',fourthWord:'',fifthWord:'',isSubmited:false,result:''})
    }
    
    onClickToggleMood = () => {
        this.setState(prevState => ({isDarkMood: !prevState.isDarkMood}))
    }
    render() {
        const {firstWord, secondWord, thirdWord, fourthWord, fifthWord, result, isSubmited, isDarkMood} = this.state
        let firstWordClassName;
        let secondWordClassName;
        let thirdWordClassName;
        let fourthWordClassName;
        let fifthWordClassName;
        
        if (firstWord && targetWord[0] === firstWord) {
            firstWordClassName = 'correct-letter-and-correct-posission'
        } else if (firstWord && targetWord.includes(firstWord)) {
            firstWordClassName = 'correct-letter-and-wrong-posission'
        } else if (firstWord){
            firstWordClassName = 'wrong-letter-and-wrong-posission'
        }

        if (secondWord && targetWord[1] === secondWord) {
            secondWordClassName = 'correct-letter-and-correct-posission'
        } else if (secondWord && targetWord.includes(secondWord)) {
            secondWordClassName = 'correct-letter-and-wrong-posission'
        } else if (secondWord){
            secondWordClassName = 'wrong-letter-and-wrong-posission'
        }

        if (thirdWord && targetWord[2] === thirdWord) {
            thirdWordClassName = 'correct-letter-and-correct-posission'
        } else if (thirdWord && targetWord.includes(thirdWord)) {
            thirdWordClassName = 'correct-letter-and-wrong-posission'
        } else if (thirdWord) {
            thirdWordClassName = 'wrong-letter-and-wrong-posission'
        }

        if (fourthWord && targetWord[3] === fourthWord) {
            fourthWordClassName = 'correct-letter-and-correct-posission'
        } else if (fourthWord && targetWord.includes(fourthWord)) {
            fourthWordClassName = 'correct-letter-and-wrong-posission'
        } else if (fourthWord) {
            fourthWordClassName = 'wrong-letter-and-wrong-posission'
        }

        if (fifthWord && targetWord[4] === fifthWord) {
            fifthWordClassName = 'correct-letter-and-correct-posission'
        } else if (fifthWord && targetWord.includes(fifthWord)) {
            fifthWordClassName = 'correct-letter-and-wrong-posission'
        } else if (fifthWord) {
            fifthWordClassName = 'wrong-letter-and-wrong-posission'
        }

        return (
            <div className={isDarkMood ? 'game-board-dark-bg-container' : 'game-board-light-bg-container'} >
               <button onClick={this.onClickToggleMood} className={isDarkMood ? 'dark-mood-class' : 'light-mood-class'}>{isDarkMood ? 'Dark' : 'Light'}</button>
               <div className='board-bg' >
                <h1 className='heading'>Wordle Clone</h1>
                <p className='description'>Find Out The Correct Word</p>
                <div className='guess-image-container'>
                    <h2 className='guess-word-heading'>Guess the Word</h2>
                    <img className='guess-img' src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-number-img.png" alt="think"/>
                </div>
                <div>
                    <input type="text" maxLength='1' value={firstWord} className={`word-input ${firstWordClassName}`} onChange={this.onEnterFirstWord} />
                    <input type="text" maxLength='1' value={secondWord} className={`word-input ${secondWordClassName}`} onChange={this.onEnterSecondWord} />
                    <input type="text" maxLength='1' value={thirdWord} className={`word-input ${thirdWordClassName}`} onChange={this.onEnterThirdWord} />
                    <input type="text" maxLength='1' value={fourthWord} className={`word-input ${fourthWordClassName}`} onChange={this.onEnterFourthWord} />
                    <input type="text" maxLength='1' value={fifthWord} className={`word-input ${fifthWordClassName}`} onChange={this.onEnterFifthWord} />

                </div>
                <div>
                <button onClick={this.onSubmitTheAnswer} className='check-btn'>Check</button>
                <button onClick={this.onResetGame} className='reset-game'>New Game</button></div>
                {isSubmited && <p className='result'>{result}</p>}
            </div>
            </div>
        )
    }
}

export default GameBoard