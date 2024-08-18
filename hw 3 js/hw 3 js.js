//ex din clasa

//1. Create a variable day with a value from 1 to 7, where 1 represents Monday and 7 represents Sunday. Use a switch statement to output the name of the day.
// For example, if day is 1, output "Monday"; if day is 5, output "Friday".

let day = 3;
switch (day) {
    case 1:
        console.log('Luni');
        break;
    case 2:
        console.log('Marti');
        break;
    case 3:
        console.log('Miercuri');
        break;
    case 4:
        console.log('Joi');
        break;
    case 5:
        console.log('Vineri');
        break;
    case 6:
        console.log('Sambata');
        break;
    case 7:
        console.log('Duminica');
        break;
    default:
        console.log('Introdu un numar de la 1 pana la 7');
}

// 2. Create a variable grade with a value from 1 to 10. Use a switch statement to categorize the grade:

// 10: "Excellent"
// 8-9: "Very Good"
// 6-7: "Good"
// 4-5: "Satisfactory"
// 1-3: "Poor"

const grade = 7;
switch (true) {
    case (grade >= 1 && grade <= 3):
        console.log('Poor');
        break;
    case (grade >= 4 && grade <= 5):
        console.log('Satisfactory');
        break;
    case (grade >= 6 && grade <= 7):
        console.log('Good');
        break;
    case (grade >= 8 && grade <= 9):
        console.log('Very Good');
        break;
    case 10:
        console.log('Excellent')
        break;
    default:
        console.log('Introdu un numar de la 1 la 10');
}


// 3. Create a variable color that represents the color of a traffic light (red, yellow, green). Use a switch statement to print
// out the action that should be taken:

// "red" -> "Stop"
// "yellow" -> "Get ready"
// "green" -> "Go"
// Hint:
// Make sure to handle both uppercase and lowercase inputs.

let color = 'RED';
switch (true) {
    case (color === 'red' || color === 'RED' || color === 'Red'):
        console.log("Stop");
        break;
    case (color === 'yellow' || color === 'YELLOW' || color === 'Yellow'):
        console.log('Get ready');
        break;
    case (color === 'green' || color === 'GREEN' || color === 'Green'):
        console.log('Go');
        break;
    default:
        console.log('Traffic lights have only three colors: red, yellow, green, and yes, you can use uppercase')
}
//using a more sophisticated way, function .toLowerCase(), which converts the string in lowercase so the comparison works regardless

// let color = 'RED';
// switch (color.toLowerCase()) {
//     case 'red':
//         console.log("Stop");
//         break;
//     case 'yellow':
//         console.log("Get ready");
//         break;
//     case 'green':
//         console.log("Go");
//         break;
//     default:
//         console.log('Traffic lights have only three colors: red, yellow, and green.');
// }


// 4. Create a variable month with a value from 1 to 12, representing the months of the year. Use a switch statement to print out the season
//(Winter, Spring, Summer, Fall) based on the month:

// December, January, February -> "Winter"
// March, April, May -> "Spring"
// June, July, August -> "Summer"
// September, October, November -> "Fall"

let month = 12;
switch (true) {
    case (month === 12 || month === 1 || month === 2):
        console.log('Winter');
        break;
    case (month === 3 || month === 4 || month === 5):
        console.log('Spring');
        break;
    case (month === 6 || month === 7 || month === 8):
        console.log('Summer');
        break;
    case (month === 9 || month === 10 || month === 11):
        console.log('Fall');
        break;
    default:
        console.log('Insert a number from 1 to 12')
}

//hw
// Ana vrea să construiască un calculator de bacșiș(tips) foarte simplu pentru ori de câte ori merge să mănânce într - un restaurant.
// În țara ei, este obișnuit să dai bacșiș 15 % dacă valoarea facturii este între 50 și 300. Dacă valoarea este diferită, bacșișul este de 20 %.
// 1. Sarcina ta este de a calcula bacșișul, în funcție de valoarea facturii.Creați o variabilă numită „tip” pentru aceasta.
// Nu este permis să folosiți o instrucțiune if/else 😅 (Dacă vă este mai ușor, puteți începe cu o instrucțiune if/else,
// apoi încercați să o convertiți într - un operator ternar!)
// 2. Imprimați pe consolă care conține valoarea facturii, bacșișul și valoarea finală(factura + bacșiș).Exemplu: „Nota a fost 275,
// bacșișul a fost 41,25 și valoarea totală 316,25”
// DATE DE TEST: Testați pentru valorile facturii 275, 40 și 430
// SUGESTIE: Pentru a calcula 20% dintr-o valoare, pur și simplu înmulțiți-o cu 20/100 = 0,2


//Rezolvarea prin switch
// let valoareaFacturii = 430;
// let tip20 = 0.2 ;
// let tip15 = 0.15;
// let valoareaTotala;
// switch (true) {
//     case (valoareaFacturii > 50 && valoareaFacturii < 300):
//         valoareaTotala = valoareaFacturii + (valoareaFacturii * tip15);
//         console.log(`Nota a fost ${valoareaFacturii}, bacsisul a fost ${valoareaFacturii * tip15}, si valoarea totala ${valoareaTotala}`);
//         break;
//     default:
//         valoareaTotala = valoareaFacturii + (valoareaFacturii * tip20);
//         console.log(`Nota a fost ${valoareaFacturii}, bacsisul a fost ${valoareaFacturii * tip20}, si valoarea totala ${valoareaTotala}`);
// }

// if (valoareaFacturii > 50 && valoareaFacturii < 300) {
//     valoareaTotala = valoareaFacturii + (valoareaFacturii * tip15);
//     console.log(`Nota a fost ${valoareaFacturii}, bacsisul a fost ${valoareaFacturii * tip15}, si valoarea totala ${valoareaTotala}`);
// }
// else if (valoareaFacturii < 50 && valoareaFacturii > 300){

// }

//Rezolvarea prin operatorul ternar
let valoareaFacturii = 430;
let valoareaTotala;
valoareaTotala = (valoareaFacturii > 50 && valoareaFacturii < 300) ? valoareaFacturii + (valoareaFacturii * 0.15)
    : valoareaTotala = valoareaFacturii + (valoareaFacturii * 0.2);
bacsis = valoareaTotala - valoareaFacturii;
console.log(`Nota a fost ${valoareaFacturii}, bacsisul a fost ${bacsis}, si valoarea totala ${valoareaTotala}`);