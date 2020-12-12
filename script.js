let randomNumber =Math.floor(Math.random()*100)+1;
const guesses =document.querySelector('.guesses');
const lastResult =document.querySelector('.lastResult');
const lowOrHi =document.querySelector('.lowOrHi');
const guessSubmit =document.querySelector('.guessSubmit');
const guessField =document.querySelector('.guessField');
let guessCount =1;
let resetButton;
guessField.focus();
function checkGuess()
{
    let userGuess =Number(guessField.value);
    if (guessCount===1)
    {
        guesses.textContent='Previous guesses:';
    }
    guesses.textContent+=userGuess+' ';
    if(userGuess===randomNumber)
    {
        lastResult.textContent='Congratulations! You got it right!'
        lastResult.style.backgroundColor='green';
        lowOrHi.textContent='';
        setGameOver();
    }
    else if(guessCount===10)
    {
        lastResult.textContent='!!!Game Over!!!';
        setGameOver();
    }
    else
    {
        if(userGuess>randomNumber)
        {
            lastResult.textContent='Wrong!';
            lastResult.style.backgroundColor='Red';
            lowOrHi.textContent='Last Guess was Too High';
        }
        else
        {
            lastResult.textContent='Wrong!';
            lastResult.style.backgroundColor='Red';
            lowOrHi.textContent='Last Guess was Too Low';
        }
    }
    guessCount++;
    guessField.value='';
    guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);
function setGameOver()
{
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement('button')
    resetButton.textContent='Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function resetGame()
{
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessCount=1;
    guesses.textContent='';
    lowOrHi.textContent='';
    lastResult.textContent='';
    resetButton.parentNode.removeChild(resetButton);
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}