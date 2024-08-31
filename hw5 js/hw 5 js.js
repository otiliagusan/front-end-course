// ex1
// Scrieți o funcție de traducere numită helloWorld care:
// acceptă 1 argument, un cod de limbă (ex. „es”, „de”, „en”)
// returnează „Hello, World!” pentru limba dată, pentru cel puțin 3 limbi. Ar trebui să returneze implicit limba engleză.
// Apelați acea funcție pentru fiecare dintre limbile acceptate și înregistrați rezultatul pentru a vă asigura că funcționează.

// function helloWorld(codLimba) {
//     if (codLimba == 'fr') {
//         return 'Bonjour, monde!';
//     }
//     else if (codLimba == 'ro') {
//         return 'Salut, lume!';
//     }
//     else if (codLimba == 'ru') {
//         return 'privet, mir!'
//     }
//     else {
//         return 'Hello World!'
//     }
// }
// console.log(helloWorld('ro'));
 
// function helloWorld(codLimba) {
//     switch (codLimba) {
//         case 'ro':
//             console.log('Salut, lume!');
//             break;
//         case 'fr':
//             console.log('Bonjour, monde!');
//             break;
//         case 'ru':
//             console.log('Privet, mir!');
//             break;
//         default: console.log('Hello world!');
//             break;
//     }
// }
// helloWorld('ro');



// ex2
// Scrieți o funcție cu numele plural care să:
// Accepte 2 argumente: un substantiv și un număr.
// Întoarcă o propoziție ce conține numărul și substantivul la plural (dacă e cazul), ex: “I have 5 cats” sau “I have 1 dog”.
// Chemați funcția cu datele: “6 pig”, “0 hamster”, “1 parrot”.
// Bonus: includem şi exceptiile "sheep" (“I have 1 sheep”, “I have 4 sheep”) şi "geese" (“I have 1 goose”, “I have 9 geese”)

// function plural(numar, substantiv) {
//     if (numar > 1 && substantiv === 'sheep' || substantiv === 'geese') {
//         return `I have ${numar} ${substantiv}`;
//     }
//     else if (numar > 1 && substantiv !== 'sheep' && substantiv !== 'geese' )   {
//         return `I have ${numar} ${substantiv}s `;
//     }
//     else {
//         return `I have ${numar} ${substantiv}`;
//     }
// }
// console.log(plural(3,'dog'));

// ex3
// Creați o programă care întoarce prețul biletului la Grădina Botanică, în funcție de vârstă: copiii până la 12 ani plătesc 5 lei,
//  după 12 - 10 lei, adulții - 20 lei, iar pensionarii(peste 65) - 15.
// Chemați numai 1 funcție, numai cu anul nașterii. (ar trebui să aveți 2 funcții)
// Datele: 2015, 1985, 1960, 2018

// let pretBilet;
// const calcVarsta = function (anulNasterii) {
//     return 2024 - anulNasterii;
// }
// const calcPretBilet = function (anulNasterii1) {
//     let varsta = calcVarsta(anulNasterii1)
//     if (varsta < 12) {
//         pretBilet = 5;
//     } else if (varsta >= 12 && varsta < 18) {
//         pretBilet = 10;
//     } else if (varsta >= 18 && varsta < 65) {
//         pretBilet = 20;
//     }else{
//         pretBilet = 15;
//     }
//     console.log('Pretul biletului pentru varsta de ' + varsta + ' ani este de ' + pretBilet + ' lei');
// }
// calcPretBilet(1985);

//ex4
// Creați o programă care are definite 3 variabile numele, anulNasterii şi isF (boolean).
// Creați o funcție care calculează vârsta persoanei.
// Creați o funcţie care acceptă o valoare booleană isF și întoarce vârsta de pensionare (folosiți ternaryOperator  - 67 bărbați, 64 femei);
// Creați o funcție care află dacă persoana este deja la pensie, peste câți ani se va pensiona, şi dacă nu este minoră.
// Afișați în consolă numele și mesajul de pensionare după exemplu: “Vasile mai are 26 de ani până la pensionare”. Chemați numai o funcție cu datele.
// Date: Sergiu, 1979. Anastasia, 1963. Andreea, 2010.

//     const numele = 'Anastasia';
//     const anulNasterii = 1963;
//     const isF = true;
// function definireVarsta(numele, anulNasterii) {
// function varstaPersoanei(anulNasterii) {
//     let varsta = 2024 - anulNasterii;
//     return varsta;
// }
// function varstaDePensioare(isF) {
//     let varstaP = (isF === true) ? 64 : 67;
//     return varstaP;
//     }
// function esteMinor(varsta, varstaP) {
//     if (varsta < 18) {
//         console.log(`${numele} este minor`);
//     }
//     else if (varsta > 18 && varsta <= varstaP) {
//         let aniPanaLaPensionare = varstaP - varsta;
//         console.log(`${numele} mai are ${aniPanaLaPensionare} de ani pana la pensionare`);
//     }
//     else {
//         console.log(`${numele} este deja pensionat`);
//     }
//     }
//     let varsta = varstaPersoanei(anulNasterii);
//     let varstaP = varstaDePensioare(isF);
//     esteMinor(varsta, varstaP)

// }
// definireVarsta(numele, anulNasterii);

// rock, paper, scissors

// function getUserChoice(userInput) {
//     userInput = userInput.toLowerCase();
//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
//         return userInput;
//     }
//     else {
//         return 'Eroare';
//     }
// }
// function getComputerChoice() {
//     let randomNumber = Math.floor(Math.random() * 3);
//     switch (randomNumber) {
//         case 0:
//             return 'rock';
//             break;
//         case 1:
//             return 'paper';
//             break;
//         case 2:
//             return 'scissors';
//             break;
//         default:
//             return 'Eroare';
//             break;
//     }
// }
// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         return 'Its a tie!';
//     }
//     if (userChoice === 'rock') {
//         if (computerChoice === 'paper') {
//             return 'The computer won!';
//         } else {
//             return 'You won!';
//         }
        
//     }
//     if (userChoice === 'paper') {
//         if (computerChoice === 'scissors') {
//             return 'The computer won!';
//         } else {
//             return 'You won!';
//         }
        
//     }
//     if (userChoice === 'scissors') {
//          if (computerChoice === 'paper') {
//             return 'You won';
//         } else {
//             return 'You won';
//         }
        
//     }
// }
// function playGame() {
//     let userChoice = getUserChoice('rock');
//     let computerChoice = getComputerChoice();
//     console.log(`You chose: ${userChoice}`);
//     console.log(`The computer chose: ${computerChoice}`);
//     console.log(determineWinner(userChoice, computerChoice));
// }
// playGame();

//rock paper scissors arrow functions
// const  getUserChoice = (userInput) => {
//     userInput = userInput.toLowerCase();
//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
//         return userInput;
//     }
//     else {
//         return 'Eroare';
//     }
// }
// const getComputerChoice = () => {
//     let randomNumber = Math.floor(Math.random() * 3);
//     switch (randomNumber) {
//         case 0:
//             return 'rock';
//             break;
//         case 1:
//             return 'paper';
//             break;
//         case 2:
//             return 'scissors';
//             break;
//         default:
//             return 'Eroare';
//             break;
//     }
// }
// const determineWinner = (userChoice, computerChoice) => {
//     if (userChoice === computerChoice) {
//         return 'Its a tie!';
//     }
//     if (userChoice === 'rock') {
//         if (computerChoice === 'paper') {
//             return 'The computer won!';
//         } else {
//             return 'You won!';
//         }
        
//     }
//     if (userChoice === 'paper') {
//         if (computerChoice === 'scissors') {
//             return 'The computer won!';
//         } else {
//             return 'You won!';
//         }
        
//     }
//     if (userChoice === 'scissors') {
//          if (computerChoice === 'paper') {
//             return 'You won';
//         } else {
//             return 'You won';
//         }
        
//     }
// }
// const playGame = () => {
//     let userChoice = getUserChoice('rock');
//     let computerChoice = getComputerChoice();
//     console.log(`You chose: ${userChoice}`);
//     console.log(`The computer chose: ${computerChoice}`);
//     console.log(determineWinner(userChoice, computerChoice));
// }
// playGame();

//sleep debt calculator
function getSleepHours(day) {
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 8;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 8;
        case 'friday':
            return 7;
        case 'saturday':
            return 6;
        case 'sunday':
            return 14;
        default:
            return 'You invented a new day of the week!'
    }
}
function getActualSleepHours() {
    let suma = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')
        + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return suma;
}
function getIdealSleepHours() {
    let idealHours = 8;
    return idealHours * 7;
}
function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    let numarDeOre = idealSleepHours - actualSleepHours;
    if (actualSleepHours == idealSleepHours) {
        console.log('Utilizatorul a obtinut cantitatea optima de somn');
        return 'Utilizatorul a obtinut cantitatea optima de somn';
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log('Utilizatorul a dormit mai mult decat era necesar, cu' + ' '+ numarDeOre*-1 +' ore' );
        return 'Utilizatorul a dormit mai mult decat era necesar';
    }
    else if (actualSleepHours < idealSleepHours) {
        console.log('Utilizatorul ar trebui sa se odihneasca'+ ' inca '+ numarDeOre +' '+'ore');
    }
    else {
        return 'Sanatate';
    }
}
calculateSleepDebt();

