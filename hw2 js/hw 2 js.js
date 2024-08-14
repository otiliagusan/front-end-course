
// 1. Creeați o variabilă "temperature". Folosiți instrucțiuni if/else pentru a verifica dacă temperatura este sub 0 (îngheț),
//între 0 și 10(frig), între 11 și 25(moderat), sau peste 25(cald).Afișați categoria de temperatură corespunzătoare.

let temperature = 13;
console.log(`Temperatura setata este ${temperature}`);
if (temperature < 0) {
    console.log('Temperatura setata indica inghet');
}
else if (0 <= temperature && temperature <= 10) {
    console.log('Temperatura setata indica frig');
}
else if (11 <= temperature && temperature <= 25) {
    console.log('Temperatura setata indica vreme moderata');
}
else if(temperature > 25 ) {
    console.log('Temperatura setata indica vreme calda');
}
else {
    console.log('Ai introdus date gresite');
}

// 2. Creeați o variabilă "day" cu o valoare de la 1 la 7, unde 1 reprezintă Luni și 7 reprezintă Duminică. Folosiți instrucțiuni if/else
//pentru a afișa numele zilei.De exemplu, dacă day este 1, afișați "Luni"; dacă day este 5, afișați "Vineri".
 
let day = 3;
if (day == 1) {
    console.log('Luni');
}
else if (day == 2) {
    console.log('Marti');
}
else if (day == 3) {
    console.log('Miercuri');
}
else if (day == 4) {
    console.log('Joi');
}
else if (day == 5) {
    console.log('Vineri');
}
else if (day == 6) {
    console.log('Sambata');
}
else if (day == 7) {
    console.log('Duminica');
}
else {
    console.log('Introdu un numar de la 1 la 7');
}

// 3. Având o variabilă "number", folosiți instrucțiuni if/else pentru a determina dacă numărul este par sau impar. Afișați "Par"
//dacă numărul este par și "Impar" dacă este impar.
const number = 7;
if (number % 2 == 0) {
    console.log('Par');
}
else if (number % 2 !== 0) {
    console.log('Impar');
}
else {
    console.log('Ai introdus date gresite');
}

// 4. Creeați o variabilă "purchaseAmount" și determinați costul total după aplicarea unei reduceri și adăugarea impozitului:
//       - Dacă purchaseAmount este mai mare sau egal cu 100, aplicăm o reducere de 10%.
//       - Pentru toate sumele, adaugăm un impozit de 5% la totalul după reducere (la necesitate).
// Afișați suma finală de plătit.

let purchaseAmount = 98;
let sumaFinala;
let sumaCuReducere;
   
if (purchaseAmount >= 100) {
    sumaCuReducere = purchaseAmount - (purchaseAmount / 100 * 10);
    sumaFinala = sumaCuReducere + (sumaCuReducere / 100 * 5);
    console.log(`Suma finala de platit este ${sumaFinala}`);
}
else {
    sumaFinala = purchaseAmount + (purchaseAmount / 100 * 5);
    console.log(`Suma finala de platit este ${sumaFinala}`);
}

// 5. Creeați o variabilă password și folosiți instrucțiuni if/else pentru a verifica complexitatea parolei:
// -    Dacă password are cel puțin 12 caractere și conține atât litere mari, litere mici, cât și cifre, afișați "Parolă foarte sigură".
// -    Dacă password are cel puțin 8 caractere și conține litere mari și litere mici, afișați "Parolă sigură".
// -    Dacă password are cel puțin 6 caractere și conține doar litere, afișați "Parolă slabă".
// -    Altminteri, afișați "Parolă nesigură".

let password = '12345678';
let lengthPassword = password.length;

if (lengthPassword >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    
    console.log('Parola este foarte sigura');
}
else if (lengthPassword >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
    console.log('Parola este sigura');
}
else if (lengthPassword >= 6 && /^[A-Za-z]+$/.test(password)) {
    console.log('Parola este slaba');
}
else {
    console.log('Parola este nesigura');
}

// 6. Scrieți un program JavaScript pentru a verifica dacă un număr dat este un număr prim.Un număr prim este un număr mai mare decât
// 1 care nu are alți divizori pozitivi în afară de 1 și de el însuși.

let numar = 13;
if (numar < 1) {
    console.log("Numarul nu este prim")
}
else {
    for (let i = 2; i <= Math.sqrt(numar); i++){
        if (numar % i === 0) {
            console.log('Numar nu e prim')
        }
        else {
            console.log('Numarul este prim')
        }
    }
    
}

// 7. Suma lungimilor a două laturi ale unui triunghi trebuie să fie mai mare decât lungimea celei de - a treia laturi.De exemplu,
//     numerele 3, 4 și 5 pot forma un triunghi pentru că 3 + 4 > 5, 4 + 5 > 3 și 5 + 3 > 4. În contrast, numerele 1, 2 și 5 nu pot forma un
//     triunghi pentru că 1 + 2 < 5. Astfel, dacă sunt date trei numere întregi, puteți determina dacă acestea ar putea forma un triunghi sau
//     nu aplicând această regulă generală.
//     Având 3 numere, determinați dacă ele pot forma un triunghi folosind regula de mai sus.De asemenea, testați dacă triunghiul rezultat ar fi
//     un triunghi dreptunghic folosind teorema lui Pitagora.

const nr1 = 2;
const nr2 = 4;
const nr3 = 5;
if (nr1 + nr2 > nr3 && nr1 + nr3 > nr2 && nr2 + nr3 > nr1) {
    if (nr3 ** 2 == nr1 ** 2 + nr2 ** 2 || nr2 ** 2 == nr3 ** 2 + nr1 ** 2
        || nr1 ** 2 == nr3 ** 2 + nr2 ** 2) {
        console.log('Laturile cu valorile date pot forma un triunghi dreptunghic');
    }
    else {
        console.log('Laturile cu valorile date pot forma un triunghi');
    }
}
else {
    console.log('Laturile nu pot forma un triunghi');
}