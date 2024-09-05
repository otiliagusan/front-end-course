//ex 1
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
//ex2
// for (let i = 1; i <= 100; i+=2){
//     console.log(i);
// }
//ex3
// for (let i = 1; i <= 100; i++){
//     console.log(`${7*i}`);
// }
//ex4
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const suma = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue , 0);
// console.log(suma);



//ex while fibonacci
// function fibonacci(limit) {
//     let a = 0;
//     let b = 1;
//     let c;
//     const sequence = [a, b];

//     while (b <= limit) {
//         c = a + b;
//         sequence.push(c);
//         a = b;
//         b = c;
//     }

//     return sequence;
// }
// console.log(fibonacci(1000));


// const projectsList = ['whaleTalk', 'secretMessage', 'goingHome'];
// const randomProject = () => {
//     for (let i = 0; i < projectsList.length; i++){
//         const randomIndex = Math.floor(Math.random() * projectsList.length);
//         console.log(`Optiunea nr ${i} : ${projectsList[randomIndex]}`);
//     }
// }
// randomProject();


// Să îmbunătățim și mai mult calculatorul de bacșișuri al Anei, de data aceasta folosind cicluri!
// 1. Creați un array „facturi” care să conțină toate cele 10 valori ale facturilor de testare
// 2. Creați 2 array-uri goale pentru “tips” și “totals”
// 3. Utilizați funcția „calcTip” pe care am scris - o înainte(nu este nevoie să repetați) pentru a calcula
// bacșișurile și valorile totale(factură + bacșiș) pentru fiecare valoare din array - ul de facturi.Utilizați
// ciclul for pentru a efectua cele 10 calcule!
// DATE TESTARE: 22, 295, 176, 440, 37, 105, 10, 1100, 86 și 52
// SFAT: Apelați calcTip în ciclu și utilizați metoda push pentru a adăuga valori in array-urile tips si totals.
// 4. Scrieți o funcție „calcAverage” care ia ca argument un array numit „arr”. Această funcție calculează media tuturor
// numerelor din array - ul primit.Apelați funcția cu array - ul „totals”.

let facturi = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = [];
let totals = []; 
function calcBacsis(nota) {
    return nota < 300 && nota >= 50 ? nota * 0.15 : nota * 0.2;
}
for (let i = 0; i < facturi.length; i++){
    tips.push(calcBacsis(facturi[i]));
    totals.push(facturi[i] + calcBacsis(facturi[i]));

    // console.log(tips);  
    // console.log(totals);
}
function calcAverage(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma/ arr.length;
}
console.log(calcAverage(facturi));

