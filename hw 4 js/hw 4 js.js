//ex1
function greeting() {
    console.log('Hello World!');
}
greeting();
//ex2
function ariaDreptunghi(lungime, latime) {
    let aria = lungime * latime;
    return aria;
}
console.log(ariaDreptunghi(7, 8));
//ex3
function numeSalut(nume) {
    console.log(`Salut, ${nume}`);
}
numeSalut('Otilia');
//ex4
function dubluNumar(numar) {
    let dublu = numar * 2;
    console.log(dublu);
    return dublu;
}
dubluNumar(4);
//ex5{
function definireaAnului(an) {
    if (an % 4 == 0 && an % 100 != 0) {
        console.log('Anul este bisect');
    }
    else if (an % 400 != 0) {
        console.log('Anul nu este bisect');
    }
    else {
        console.log('Ai introdus date eronate');
    }
}
definireaAnului(2024);

/*Sarcina : Calcularea și afișarea ariei și perimetrului unui dreptunghi
Creați o funcție numită rectangleProperties care primește lungimea și lățimea unui dreptunghi. În interiorul acesteia, definiți două funcții: 
una pentru calcularea ariei (calculateArea) și una pentru calcularea perimetrului (calculatePerimeter). Funcția principală 
rectangleProperties va apela aceste două funcții și va afișa rezultatele.*/
 
function rectangleProperties(length, width){
    function calculateArea() {
        return length * width;
    }
    function calculatePerimeter() {
        return (length + width) * 2;
    }
    console.log(`Aria dreptunghiului este ${calculateArea()}`);
    console.log(`Perimetrul dreptunghiului este ${calculatePerimeter()}`);
}
rectangleProperties(3, 4);

// Înapoi la cele două echipe de gimnastică, Delfinii și Koala! Există o nouă disciplină de gimnastică, care funcționează diferit.
//Fiecare echipă concurează de 3 ori, iar apoi se calculează media celor 3 scoruri(deci un punctaj mediu pe echipă).
// O echipă câștigă NUMAI dacă are cel puțin DUBLUL scorului mediu al celeilalte echipe. Altfel, nicio echipă nu câștigă!
// 1. Creați o funcție „calcAverage” pentru a calcula media a 3 scoruri
// 2. Folosiți funcția pentru a calcula media pentru ambele echipe
// 3. Creați o funcție „checkWinner” care ia ca parametri scorul mediu al fiecărei echipe („avgDolphins” și „avgKoalas”),
//apoi înregistrează câștigătorul în consolă, împreună cu punctele de victorie, conform regulii de mai sus.Exemplu: „Koalas câștigă(30 vs. 13)”.
// 4. Utilizați funcția „checkWinner” pentru a determina câștigătorul atât pentru DATA 1, cât și pentru DATA 2.
// 5. Ignorați remizele de data aceasta.
// DATE TESTULUI 1: Delfinii scor 44, 23 și 71. Koalas scor 65, 54 și 49
// DATE TESTUL 2: Delfinii scor 85, 54 și 41. Koala scor 23, 34 și 27


function calcAverage(scor1, scor2, scor3) {
    media = (scor1 + scor2 + scor3) / 3;
    return media;       
}
function checkWinner(avgDolphins, avgKoalas) {
        if (avgDolphins >= avgKoalas * 2) {
            console.log(`Delfinii castiga (${avgDolphins} vs ${avgKoalas})`);
        }
        else if (avgKoalas >= avgDolphins * 2) {
            console.log(`Koalas castiga (${avgKoalas} vs ${avgDolphins})`);
        }
        else {
            console.log('Nici o echipa nu castiga');
        }
}
//date test 1
console.log(`Scorul mediul pentru Delfini este ${calcAverage(44, 23, 71)}`);
console.log(`Scorul mediul pentru Koalas este ${calcAverage(65, 54, 49)}`);
checkWinner(46, 56);
//Date test 2
console.log(`Scorul mediul pentru Delfini este ${calcAverage(85, 54, 41)}`);
console.log(`Scorul mediul pentru Koalas este ${calcAverage(23, 34, 27)}`);
checkWinner(60, 28);

