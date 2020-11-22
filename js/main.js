const par1 = document.querySelector("#par-1");
const par2 = document.querySelector("#par-2");
const par3 = document.querySelector("#par-3");
const par4 = document.querySelector("#par-4");
const par5 = document.querySelector("#par-5");
const par6 = document.querySelector("#par-6");
const par7 = document.querySelector("#par-7");
const par8 = document.querySelector("#par-8");
const par9 = document.querySelector("#par-9");
const par10 = document.querySelector("#par-10");

const q1 = prompt('Poprzez wyrażenie "def" w pythonie definiuje się tylko:').toUpperCase().trim();
const q2 = prompt('Znakiem kończącum wiersz kodu w JavaScript jest:');
const q3 = prompt('Język c++ powstał w:');
const q4 = prompt('Liczba 64 w kodzie binarnym to:');
const q5 = prompt('Jaka jest stolica Czech').toUpperCase().trim();
const q6 = prompt('Jaka jest stolica Czech').toUpperCase().trim();
const q7 = prompt('Jaka jest stolica Czech').toUpperCase().trim();
const q8 = prompt('Jaka jest stolica Czech').toUpperCase().trim();
const q9 = prompt('Jaka jest stolica Czech').toUpperCase().trim();
const q10 = prompt('Jaka jest stolica Czech').toUpperCase().trim();

let counter = 0;

//Pytanie 1
if (q1 === 'PROCEDURY') {
    counter++
    par1.innerHTML = `
Pytanie 1 - Poprzez wyrażenie "def" definiuje się tylko <span id="correct">${q1}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else if (q1 === 'PROCEDURA') {
    counter++
    par1.innerHTML = `
Pytanie 1 - Poprzez wyrażenie "def" definiuje się tylko <span id="correct">${q1}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else if (q1 === 'PROCEDURĘ') {
    counter++
    par1.innerHTML = `
Pytanie 1 - Poprzez wyrażenie "def" definiuje się tylko <span id="correct">${q1}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par1.innerHTML = `
Pytanie 1 - Poprzez wyrażenie "def" definiuje się tylko <span id="incorrect">${q1}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">PROCEDURY, PROCEDURA, PROCEDURĘ</span>
`;
}

//Pytanie 2
if (q2 === ';') {
    counter++
    par2.innerHTML = `
Pytanie 2 - Znakiem kończącym wiersz kodu w JavaScript jest <span id="correct">${q2}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par2.innerHTML = `
Pytanie 2 - Znakiem kończącym wiersz kodu w Java script jest <span id="incorrect">${q2}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">;</span>
`;
}

//Pytanie 3
if (q3 === '1998') {
    counter++
    par3.innerHTML = `
Pytanie 3 - Język c++ powstał w  <span id="correct">${q3}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par3.innerHTML = `
Pytanie 3 - język c++ powstał w <span id="incorrect">${q3}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">1998</span>
`;
}

//Pytanie 4
if (q4 === '1000000') {
    counter++
    par4.innerHTML = `
Pytanie 4 - Liczba 64 w kodzie binarnym to <span id="correct">${q4}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par4.innerHTML = `
Pytanie 4 - liczba 64 w kodzie binarnym to  <span id="incorrect">${q4}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">1000000</span>
`;
}

//Pytanie 5


//Pytanie 6


//Pytanie 7


//Pytanie 8


//Pytanie 9


//Pytanie 10


//Podsumowanie
document.querySelector('#ilosc').innerHTML = `punkty: ${counter} / 10`;
document.querySelector('#procenty').innerHTML = `Procenty: ${counter * 10 + '%'}`;
