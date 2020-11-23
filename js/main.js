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
const q2 = prompt('Znakiem kończącum wiersz kodu w JavaScript jest:').trim();
const q3 = prompt('Język c++ powstał w:').trim();
const q4 = prompt('Liczba 64 w kodzie binarnym to:').trim();
const q5 = prompt('Komentarz jednoliniowy w JS oznacz się:').trim();
const q6 = prompt('Aby zapisać plik w vimie należu użyć skrótu:').toLowerCase().trim();
const q7 = prompt('Aby zapisać plik w vimie należy użyć skrótu').toLowerCase().trim();
const q8 = prompt('W każdym języku programowania 0.1 + 0.2 nie będze równe 0.3', 'Wpisz Tak lub Nie').toUpperCase().trim();
const q9 = prompt('Nie macOS nie Windows a więc').toUpperCase().trim();
const q10 = prompt('1GB to 1024:').toUpperCase().trim();

let counter = 0;

//Pytanie 1
if (q1 === 'PROCEDURY') {
    counter++
    par1.innerHTML = `
<strong>Pytanie 1</strong> - Poprzez wyrażenie "def" definiuje się tylko <span id="correct">${q1}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else if (q1 === 'PROCEDURA') {
    counter++
    par1.innerHTML = `
<strong>Pytanie 1</strong> - Poprzez wyrażenie "def" definiuje się tylko <span id="correct">${q1}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else if (q1 === 'PROCEDURĘ') {
    counter++
    par1.innerHTML = `
<strong>Pytanie 1</strong> - Poprzez wyrażenie "def" definiuje się tylko <span id="correct">${q1}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par1.innerHTML = `
<strong>Pytanie 1</strong> - Poprzez wyrażenie "def" definiuje się tylko <span id="incorrect">${q1}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">PROCEDURY, PROCEDURA, PROCEDURĘ</span>
`;
}

//Pytanie 2
if (q2 === ';') {
    counter++
    par2.innerHTML = `
<strong>Pytanie 2</strong> - Znakiem kończącym wiersz kodu w JavaScript jest <span id="correct">${q2}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par2.innerHTML = `
<strong>Pytanie 2</strong> - Znakiem kończącym wiersz kodu w Java script jest <span id="incorrect">${q2}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">;</span>
`;
}

//Pytanie 3
if (q3 === '1998') {
    counter++
    par3.innerHTML = `
<strong>Pytanie 3</strong> - Język c++ powstał w  <span id="correct">${q3}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par3.innerHTML = `
<strong>Pytanie 3</strong> - język c++ powstał w <span id="incorrect">${q3}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">1998</span>
`;
}

//Pytanie 4
if (q4 === '1000000') {
    counter++
    par4.innerHTML = `
<strong>Pytanie 4</strong> - Liczba 64 w kodzie binarnym to <span id="correct">${q4}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par4.innerHTML = `
<strong>Pytanie 4</strong> - liczba 64 w kodzie binarnym to  <span id="incorrect">${q4}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">1000000</span>
`;
}

//Pytanie 5
if (q5 === '//') {
    counter++
    par5.innerHTML = `
<strong>Pytanie 5</strong> - komentarz jednoliniowy w JS oznacza się: <span id="correct">${q5}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par5.innerHTML = `
<strong>Pytanie 5</strong> - komentarz jednoliniowy w JS oznacz się <span id="incorrect">${q5}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">//</span>
`;
}

//Pytanie 6
if (q6 === 'w') {
    counter++
    par6.innerHTML = `
<strong>Pytanie 6</strong> - Aby zapisać plik w vimie należy użyć skrótu <span id="correct">${q6}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par6.innerHTML = `
<strong>Pytanie 6</strong> - Aby zapisać plik w vimie należy użyć skrótu <span id="incorrect">${q6}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">w</span>
`;
}

//Pytanie 7
if (q7 === 'q') {
    counter++
    par7.innerHTML = `
<strong>Pytanie 7</strong> - Aby zapisać plik w vimie należy użyć skrótu <span id="correct">${q7}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par7.innerHTML = `
<strong>Pytanie 7</strong> - Aby wyjść z vima należy użyć skrótu <span id="incorrect">${q7}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">q</span>
`;
}

//Pytanie 8
if (q8 === 'TAK') {
    counter++
    par8.innerHTML = `
<strong>Pytanie 8</strong> - W każdym języku programowania 0.2 + 0.3 będzie równe <span id="correct">${q8}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par8.innerHTML = `
<strong>Pytanie 8</strong> - W każdym języku programowania 0.2 + 0.3 będzie równe <span id="incorrect">${q8}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">tak</span>
`;
}

//Pytanie 9
if (q9 === 'LINUX') {
    counter++
    par9.innerHTML = `
<strong>Pytanie 9</strong> - Nie macOS nie Windows a więc <span id="correct">${q9}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par9.innerHTML = `
<strong>Pytanie 9</strong> - Nie macOS nie Windows a więc <span id="incorrect">${q9}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">LINUX</span>
`;
}

//Pytanie 10
if (q10 === 'MB') {
    counter++
    par10.innerHTML = `
<strong>Pytanie</strong> 10 - 1GB to 1024: <span id="correct">${q10}</span>
<img id="odp" src="img/correct.png" alt="correct">
`;
} else {
    par10.innerHTML = `
<strong>Pytanie 10</strong> - 1GB to 1024: <span id="incorrect">${q10}</span>
<img id="odp" src="img/incorrect.png" alt="incorrect">
Akceptowane odpowiedźi to: <span id="correct">MB</span>
`;
}

//Podsumowanie
document.querySelector('#ilosc').innerHTML = `<strong>Punkty: </strong>${counter} / 10`;
document.querySelector('#procenty').innerHTML = `<strong>Procenty: </strong>${counter * 10 + '%'}`;
