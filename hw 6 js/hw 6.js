// let bills = [125, 55, 44];
// let tips = [];

// function calcBacsis(nota) {
//     return nota < 300 && nota >= 50 ? nota * 0.15 : nota * 0.2;
// }

// tips.push(calcBacsis(bills[0]));
// tips.push(calcBacsis(bills[1]));
// tips.push(calcBacsis(bills[2]));
// // tips[calcBacsis(bills[0])], tips[calcBacsis(bills[1])], tips[calcBacsis(bills[2])];
// console.log(tips);


// //cu slice

// //cu concat
// let numerecopie3 = [...numere];

// ex1
// let array = [1, 2, 3];
// let array1 = array.reverse();
// console.log(array1);

//ex2
// function rotateLeft() {
//     let primulElement = array.shift();
//     array.push(primulElement);
//     return array;
// }
// let array = [1, 2, 3];
// let array1 = rotateLeft(array);
// console.log(array1);

//ex3
// function joinArrays () {
//     let array = [1, 2, 3];
//     let array1 = [4, 5, 6];
//     let joinedArrays = array.concat(array1);
//     console.log(joinedArrays);
//     return joinedArrays;
// }
// joinArrays();

// ex4
// let array = [-3, -2, -1, 0, 1, 2, 3];
// let array1 = [];
// function onlyPositive(numbers) {
//     return numbers.filter(function(number){
//         return number > 0;
//     })
// }
// array1 = onlyPositive(array);
// console.log(array1);

// Creează un array numit listaCumparaturi și adaugă câteva produse pe care vrei să le cumperi.
// Scrie o funcție numită cautaProdus care primește un produs ca argument și returnează indicele acestuia în listă sau un mesaj dacă nu este găsit.
// Scrie o funcție numită adaugaProdus care primește un produs ca argument și dacă acesta nu este deja în listă îl adaugă la lista de cumpărături.
// Scrie o funcție numită eliminaProdus care primește un produs ca argument și îl elimină din lista de cumpărături.
// Afișați atât lista inițială și numărul de produse din ea cât și lista finală și numărul de produse din ea.

// Creează un array numit listaCumparaturi și adaugă câteva produse pe care vrei să le cumperi.
const listaCumparaturi = ['banane', 'paine', 'rosii', 'ceai'];
console.log(listaCumparaturi);
console.log(listaCumparaturi.length);

// Scrie o funcție numită sorteazaAlfabetic care sortează lista de cumpărături în ordine alfabetică și o afișează.
// function sorteazaAlfabetic() {
//     let listaSortata = listaCumparaturi.sort();
//     console.log(listaSortata);
//     return listaSortata;
// }
// sorteazaAlfabetic();

// Scrie o funcție numită cautaProdus care primește un produs ca argument și returnează indicele acestuia în listă sau un mesaj dacă nu este găsit.
// function cautaProdus(produs) {
//     if (listaCumparaturi.includes(produs)) {
//         console.log(`${produs} are urmatorul index, `+ listaCumparaturi.indexOf(produs));
//     }
//     else {
//         console.log(`${produs} nu a fost gasit in lista`);
//     }
//     return produs;
// }
// cautaProdus('ceai');

// Scrie o funcție numită adaugaProdus care primește un produs ca argument și dacă acesta nu este deja în listă îl adaugă la lista de cumpărături.
// function adaugaProdus(produs) {
//     if (!listaCumparaturi.includes(produs)) {
//         listaCumparaturi.push(produs);
//     }
//     else {
//         (`${produs} exista in lista`);
//     }
// }
// adaugaProdus('lapte')
// console.log(listaCumparaturi);

// Scrie o funcție numită eliminaProdus care primește un produs ca argument și îl elimină din lista de cumpărături.
function eliminaProdus(produs) {
    if (listaCumparaturi.includes(produs)) {
         listaCumparaturi.splice(listaCumparaturi.indexOf(produs), 1)
    }
    else {
        (`${produs} nu este prezent in lista`);
    }
}
eliminaProdus('banane');
console.log(listaCumparaturi);
console.log(listaCumparaturi.length);



