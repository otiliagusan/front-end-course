// Vadim și Alex încearcă să-și compare BMI (indicele de masă corporală), care este calculat folosind formula: BMI = masă /
// înălțime ** 2. (masa în kg și înălțimea în metri).

// VARIANTA 1: Vadim are greutatea de 78 kg și are 1,69 m înălțime. Alex cântărește 92 kg și are 1,95 m înălțime.
// VARIANTA  2: Vadim are greutatea de 95 kg și are 1,88 m înălțime. Alex cântărește 85 kg și are 1,76 m înălțime.

// 1. Stocați masa și înălțimea lui Vadim și Alex în variabile

//V1
const masaVadimV1    = 78;
const inaltimeVadimV1 = 1.69;
const masaAlexV1 = 92;
const inaltimeAlexV1 = 1.95;

//V2
const masaVadimV2    = 95;
const inaltimeVadimV2 = 1.88;
const masaAlexV2 = 85;
const inaltimeAlexV2 = 1.76;

//declararea variabilei BMI
let BMI;

// 2. Calculați ambele BMI folosind formula (puteți chiar implementa ambele variante)

// Varianta in care este definita o singura valoare pentru BMI.

// BMI = masaAlexV1 / inaltimeAlexV1 ** 2;
// console.log(' Alex, in V1, are urmatorul BMI' + ' ' + BMI);
// BMI = masaVadimV1 / inaltimeVadimV1 ** 2;
// console.log(' Vadim, in V1, are urmatorul BMI' + ' ' + BMI);
// BMI = masaAlexV2 / inaltimeAlexV2 ** 2;
// console.log(' Alex, in V2, are urmatorul BMI' + ' ' + BMI)
// BMI = masaVadimV2 / inaltimeVadimV2 ** 2;
// console.log(' Vadim, in V2, are urmatorul BMI' + ' ' + BMI);

//Varianta in care sunt definite variabile aparte, pentru a putea compara in urmatorul ex.
BMI_AlexV1 = masaAlexV1 / inaltimeAlexV1 ** 2;
console.log(' Alex, in V1, are urmatorul BMI' + ' ' + BMI_AlexV1);
BMI_VadimV1 = masaVadimV1 / inaltimeVadimV1 ** 2;
console.log(' Vadim, in V1, are urmatorul BMI' + ' ' + BMI_VadimV1);
BMI_AlexV2 = masaAlexV2 / inaltimeAlexV2 ** 2;
console.log(' Alex, in V2, are urmatorul BMI' + ' ' + BMI_AlexV2)
BMI_VadimV2 = masaVadimV2 / inaltimeVadimV2 ** 2;
console.log(' Vadim, in V2, are urmatorul BMI' + ' ' + BMI_VadimV2);

// 3. Creați o variabilă booleană „markHigherBMI” care să conțină informații despre dacă Vadim are un BMI mai mare decât Alex.
let markHigherBMI;
markHigherBMI = BMI_VadimV1 > BMI_AlexV1;
console.log('Vadim are un BMI mai mare decât Alex ?' + ' ' + markHigherBMI);
markHigherBMI = BMI_VadimV2 > BMI_AlexV2;
console.log('Vadim are un BMI mai mare decât Alex ?' + ' ' + markHigherBMI);
