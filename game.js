function rock(){

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
alert(`you selected: rock, computer selected: ${computerMove}, result: ${result}`)
}

function paper(){
    
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
    alert(`you selected: paper, computer selected: ${computerMove}, result: ${result}`);
}

function scissors(){
    
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
    alert(`you selected: scissors, computer selected: ${computerMove}, result: ${result}`);
}
