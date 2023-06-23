
function rock(){
    let score = JSON.parse(localStorage.getItem('score'))
    if(!score){
        score = {
            wins: 0,
            losses: 0,
            ties: 0
        }
    }


const randomNumber = Math.random();
let computerMove;
let result ;

if(randomNumber >= 0 && randomNumber < 1/2){
    computerMove = 'rock';
}
else if(randomNumber >= 1/2 && randomNumber < 2/3){
    computerMove = 'paper';
}
else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
}


if(computerMove === 'rock'){
    result = 'tie!';
}
else if(computerMove ==='paper'){
    result = 'you lose!';
}
else if(computerMove === 'scissors'){
    result = 'you win!';
}


if(result === 'you win!'){
    score.wins += 1;
}
else if(result === 'you lose!'){
    score.losses += 1;
}
else if(result === 'tie!'){
    score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

alert(`you selected rock, computer selected ${computerMove}, ${result}
wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`);



}

function paper(){
    let score = JSON.parse(localStorage.getItem('score'))

    
    const randomNumber = Math.random();
    
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }
    
    let result;
    if(computerMove === 'rock'){
        result = 'you win!'
    }
    if(computerMove === 'paper'){
        result = 'tie!'
    }
    if(computerMove === 'scissors'){
        result = 'you lose!'
    }



    if(result === 'you win!'){
        score.wins += 1;
    }
    else if(result === 'you lose!'){
        score.losses += 1;
    }
    else if(result === 'tie!'){
        score.ties += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    alert(`you selected rock, computer selected ${computerMove}, ${result}
wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`);


}


   


function scissors(){
    let score = JSON.parse(localStorage.getItem('score'))

    
    const randomNumber = Math.random();
    
    if( randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock'
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }


    let result;
    if(computerMove === 'rock'){
        result = 'you lose!';
    }
    else if(computerMove === 'paper'){
        result = 'you win!';
    }
    else if(computerMove === 'scissors'){
        result = 'tie!';
    }
    
    
    
    if(result === 'you win!'){
        score.wins += 1;
    }
    else if(result === 'you lose!'){
        score.losses += 1;
    }
    else if(result === 'tie!'){
        score.ties += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    alert(`you selected rock, computer selected ${computerMove}, ${result}
    wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`);
}
function reset(){
    let score = JSON.parse(localStorage.getItem('score'))
    score.losses = 0;
    score.wins = 0;
    score.ties = 0;
    localStorage.removeItem('score');
}
