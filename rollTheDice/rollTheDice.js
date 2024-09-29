//Targhetarea elementelor
const containerPlayer1 = document.querySelector('.player--0');
const containerPlayer2 = document.querySelector('.player--1');
const totalScorePlayer1 = document.getElementById('score--0');
const totalScorePlayer2 = document.getElementById('score--1');
const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');
const diceElem = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

var scores, currentScore, currentPlayer, clicks, activeGame;

//Functia pentru joc nou
function newGame() {
    //reseatrea variabilelor
    scores = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    clicks = 0; 
    activeGame = true;

    //resetarea ui
    totalScorePlayer1.textContent = '0';
    totalScorePlayer2.textContent = '0';
    currentScorePlayer1.textContent = '0';
    currentScorePlayer2.textContent = '0';

    //resetarea claselor containerelor
    containerPlayer1.classList.remove('player--active', 'player--winner');
    containerPlayer2.classList.remove('player--active', 'player--winner');
    containerPlayer1.classList.add('player--active');
}
//Functia pentru aruncarea zarului
function rollDice() {
    //daca jocul e activ
    if (activeGame) {

    // Generăm un număr aleatoriu
        const dice = Math.trunc(Math.random() * 6) + 1;
        // Calculăm click-urile (incrementare)
        clicks++;
        // Afişăm faţa zarului în corespundere cu numărul aleatoriu generat, schimbarea sursei imaginii in html
        diceElem.classList.remove('hidden');
        diceElem.src = `dice-${dice}.png`;
        
    // Condiţii speciale:
        // dacă nimereşte zarul cu 1 -> schimbăm jucătorul
        if (dice === 1) {
            switchPlayer();
        }
        // dacă suntem la a treia aruncare de zar din mutare,
        else if (clickcs > 2) {
            // actualizăm scorul curent funcţional (adăugăm numărul aleatoriu primit la scorul curent)
            currentScore += dice;
            // actualizăm scorul curent UI
            document.getElementById(`current --${currentPlayer}`).textContent = currentScore;
            // adăugăm tot scorul curent la scorul total
            hold();
        }
        else{
    // dacă suntem la prima sau a doua aruncare de zar din mutare,
            // actualizăm scorul curent funcţional (adăugăm numărul aleatoriu primit la scorul curent)
            currentScore += dice;
            // actualizăm scorul curent UI
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    }
 }   
}

//Functia pentru salvarea scorului - hold
function hold() {
    //Apelată DOAR dacă jocul e activ
    if (activeGame) {     
    // Adăugăm scorul curent la scorul total, actualizăm scorul total
        // funcţional
        scores[currentPlayer] += currentScore;
        // UI
        document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
        // Verificăm dacă scorul a depăşit limita (100 sau 20)
        if (scores[currentPlayer] >= 20) {
            // true: finalizăm jocul:
            // 	- containerul ce are clasa active primeşte adiţional clasa winner
            document.querySelector('.player--active').classList.add('.player--winner');
            // 	- ascundem zarul(//adaugarea in html si css clasa dice hidden la png dice5)
            //css clasa hidden
            //.hidden{display:none}
            diceElem.classList.classList.add('hidden');
            // 	- setăm activeGame la false
            activeGame = false;
        } else {// false: schimbăm jucătorul
            switchPlayer(); 
        }
        
  }
}

//Functia de schimbare a jucatorului 
function switchPlayer() {
    //resetarea scorului la 0
    currentScore = 0;
    //se schimba jucatorul activ(daca e 0 - devine si vicceversa)
    currentPlayer == 1 ? currentPlayer = 0 : currentPlayer = 1;
    //clickurile se reseteaza la 0
    clicks = 0;
//     UI
    // Scorul curent se resetează la 0
    document.getElementById(`current--${currentPlayer}`).textContent = '0';
    // Containerele jucătorilor fac schimb la clasa active
    containerPlayer1.classList.toggle('player--active');
    containerPlayer2.classList.toggle('player--active');


}


newGame();
//Atribuim eventListener(click) pentru fiecare dintre butoane
newGameBtn.addEventListener('click', newGame);
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);