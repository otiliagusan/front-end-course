// const carte = {
//     titlu: "The Notebook",
//     autor: "Nicholas Sparks",

//     listBook: function () {
//         console.log("This is a method");
//     }
// }
// // console.log(carte.autor);
// // console.log(this);
// // function carteNoua() {
// //     console.log('Aceasta este noua mea carte');
// // }
// // window.carteNoua();
// // console.log(this);
// function carteNoua() {
//     console.log(this);
// }
// carteNoua();

// ex1
// const persoana = {
//     nume: 'Otilia',
//     varsta: 23,
//     ocupatie: 'studenta',
    
//     salut: function () {
//         console.log(`Salut, numele meu este ${this.nume}`);
//     }
// }
// persoana.salut();
// var greeting = persoana.salut();
// console.log(greeting);

// // ex2
// const contBancar = {
//     detinator: 'Eu',
//     sold: 0,
//     depunere: function (valoare) {
//         return this.sold += valoare;
//     },
//     retragere: function (valoare) {
//         return this.sold -= valoare;
//     }
// }
// console.log(`Soldul initial al lui ${contBancar.detinator} este ${contBancar.sold}. Dupa depunere soldul este: ${contBancar.depunere(100)}.
// Dupa retragere soldul ramas este de ${contBancar.retragere(50)}.`);

// //ex3
// const carte = {
//     titlu: 'Contele de Monte Cristo',
//     autor: 'Alexandru Dumas',
//     imprumuta(cititor) {
//         console.log(`${cititor.nume} a imprumutat cartea ${this.titlu} de ${this.autor}`);
//     }
// }
// const cititor = {
//     nume: 'Otilia',
//     imprumutaCarte(carte) {
//         carte.imprumuta(this);
//     }
// }
// cititor.imprumutaCarte(carte);

// //ex4
// const calculator = {
//     sold: 0,
    
//     adauga(valoare) {
//         this.sold += valoare;
//         return this;
//     },
//     scade(valoare) {
//         this.sold -= valoare;
//         return this;
//     },
//     inmulteste(valoare) {
//         this.sold *= valoare;
//         return this;
//     },
//     imparte(valoare) {
//         if (valoare === 0) {
//             console.log('Impartirea la zero nu are sens ')
//             return this;
//         }
//         this.sold /= valoare
//         return this;
//     }
// }
// let resFinal = calculator.adauga(50).scade(30).inmulteste(2).imparte(999);
// console.log(resFinal.sold);

//exobjects
// const persoana = {
//     nume: 'otilia',
//     varsta: 23,
//     oras:'Chisinau',
// }
// console.log(persoana.nume, persoana.varsta);

// const masina = {
//     pornesteMasina: function(){
//         console.log('Motor pornit');
//     }
// }
// masina.pornesteMasina();

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id: 5566,
//     getThis: function() {
//       return this;
//     },
//     getUserInfo: function() {
//       return `The user with the ID of ${this.id} is ${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(person.getThis());
// console.log(person.getUserInfo());

//ex1
// const persoana = {
//     nume: "Otilia",
//     varsta: 23,
//     ocupatie: "studenta",
//     salut: function () {
//         console.log(`salut, numele meu este ${this.nume}`);
//     }
// }
// persoana.salut();

//ex2
// const contBancar = {
//     detinator: 'Otilia',
//     sold:0,
//     depunere: function (numar) {
//         this.sold += numar;
//         console.log(this.sold);
//         return this.sold;
//     },
//     retragere: function (numar) {
//         this.sold -= numar;
//         console.log(this.sold);
//         return this.sold;
//     }
// }
// contBancar.depunere(100);
// contBancar.retragere(50);

//ex3
// const carte = {
//     nume: 'Great Gatsby',
//     autor: 'F.Scott Fitzgerald',
//     imprumuta: function (cititor) {
//         console.log(`${cititor} a citit ${this.nume}`);
//         return `${cititor} a citit ${this.nume}`;
//     }
// }
// const cititor = {
//     nume: 'Mihai',
//     imprumutaCarte: function (carte) {
//         return carte.imprumuta(this.nume);
//     }
// }
// cititor.imprumutaCarte(carte);

//ex4
// const calculator = {
//     sold: 0, 
//     adauga: function (numar) {
//         this.sold += numar;
//         return this;
//     },
//     scade: function (numar) {
//         this.sold -= numar;
//         return this;
//     }
        
// }
// let rezultat = calculator.adauga(50).scade(10).sold;
// console.log(rezultat);



// Să revenim la Mark și Vasile comparându - și BMI - urile! De data aceasta, să folosim obiecte pentru a implementa calculele!
// Amintiți - vă: BMI = masă / înălțime ** 2 = masă / (înălțime * înălțime). (masa in kg si inaltimea in metri)
// 1. Pentru fiecare dintre ele, creați un obiect cu proprietăți pentru numele complet, masa și înălțimea lor (Mark Ganea și Vasile Cibotaru)
// 2. Creați o metodă „calcBMI” pe fiecare obiect pentru a calcula BMI(aceeași metodă pentru ambele obiecte).Stocați valoarea BMI într - o
// proprietate și, de asemenea, returnați - o din metodă.
// 3. Afisati in consola cine are BMI mai mare, împreună cu numele complet și BMI respectiv.Exemplu: „BMI - ul lui Vasile Cibotaru(28, 3)
// este mai mare decât cel al lui Mark Ganea(23, 9)!”
// DATE TEST: Mark greutatea 78 kg și are 1,69 m înălțime. Vasile cântărește 92 kg și are 1,95 m înălțime.

const MarkGanea = {
    nume:'Mark Ganea',
    inaltime: 1.69,
    greutate: 78,
    calcBMI:function (){
        let BMI = this.greutate / this.inaltime ** 2;
        console.log(BMI);
        return BMI;
    }
}
let mG = MarkGanea.calcBMI().toFixed(2);

const VasileCibotaru = {
    nume:'Vasile Cibotaru',
    inaltime: 1.95,
    greutate: 92,
    calcBMI:function (){
        let BMI = this.greutate / this.inaltime ** 2;
        console.log(BMI);
        return BMI;
    }
}
let mV = VasileCibotaru.calcBMI().toFixed(2);
// (mG > mV) ? console.log(`BMI-ul lui Mark Ganea (${mG}) este mai mare decat cel al lui Vasile Cibotaru (${mV})`) :
//     console.log(`BMI-ul lui Mark Ganea (${mG}) este mai mic decat cel al lui Vasile Cibotaru (${mV})`);

if (mG < mV) {
    console.log(`BMI-ul lui Mark Ganea (${mG}) este mai mic decat cel al lui Vasile Cibotaru (${mV})`)
}
else if (mG > mV) {
    console.log(`BMI-ul lui Mark Ganea (${mG}) este mai mare decat cel al lui Vasile Cibotaru (${mV})`)
}
else {
    console.log('Mark si Vasile au acelasi BMI');
}
