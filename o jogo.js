//Desculpa eu to aprendo ainda, por favor

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('ERRO CODIGO 1')
    }
}

const getComputerChoice = () => {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Empate';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Computador ganhou';
    } else {
        return 'Você ganhou';
    }
}

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computador ganhou';
        } else {
        return 'Você ganhou';
    }
}

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computador ganhou';
    } else {
        return 'Você ganhou';
    }
}

    if (userChoice === 'bomb') {
        return 'Você ganhou';
    }
}

function playGame() {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();

    console.log(userChoice)
    console.log(computerChoice)

    console.log(determineWinner(userChoice, computerChoice))
}

playGame();
