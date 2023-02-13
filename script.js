const addRandomNumberButton = document.getElementById('dodajRandom');
const manualNumberInput = document.getElementById('dodajInput');
const addManualNumberButton = document.getElementById('dodajButton');
const numberList = document.getElementById('listaStevilk');
const removeRandomNumberButton = document.getElementById(
  'odstraniRandomStevilko'
);
const removeAllNumbersButton = document.getElementById('odstraniVse');
const calculateMedianButton = document.getElementById('izracunajMediano');
const naključnaTabela = document.getElementById('nakljucnaTabela');
const inputEL = document.getElementsByTagName('input');
const tabela1El = document.getElementsByClassName('tabela1');

// Dodaj 5 random številk

const petNakljucnih = document
  .getElementById('nakljucnaTabela')
  .getElementsByTagName('tbody')[0];
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 100);
  let numberList = document.getElementById('listaStevilk');
  numberList.innerHTML += '<li>' + randomNumber + '</li>';
}

// Dodaj random  številko

addRandomNumberButton.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const li = document.createElement('li');
  li.innerText = randomNumber;
  numberList.appendChild(li);
});

// Dodaj številko iz inputa

addManualNumberButton.addEventListener('click', function () {
  const manualNumber = manualNumberInput.value;
  manualNumberInput.value = '';
  if (manualNumber === '') {
    alert('Prosimo unestie celo številko.');
  } else if (Number.isInteger(Number(manualNumber))) {
    const li = document.createElement('li');
    li.innerText = manualNumber;
    numberList.appendChild(li);
  } else {
    alert('Prosimo unesite celo številko.');
  }
});

// Odstrani naključno številko

removeRandomNumberButton.addEventListener('click', function () {
  const numberListItems = numberList.getElementsByTagName('li');
  if (numberListItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * numberListItems.length);
    numberList.removeChild(numberListItems[randomIndex]);
  }
});

// Odstrani vse številke

removeAllNumbersButton.addEventListener('click', function () {
  const tabela1El = document.getElementsByClassName('tabela1');
  numberList.innerHTML = '';
  for (let i = 0; i < tabela1El.length; i++) {
    tabela1El[i].style.border = 'none';
  }
});

//Izracunaj Mediano

// function calculateMedian() {
//   const list = Array.from(document.querySelectorAll('#listaStevilk li')).map(
//     (li) => parseInt(li.innerText)
//   );
//   list.sort((a, b) => a - b);

//   let median;
//   if (list.length % 2 === 0) {
//     const mid = list.length / 2;
//     median = (list[mid - 1] + list[mid]) / 2;
//   } else {
//     median = list[Math.floor(list.length / 2)];
//   }

//   const row = document.createElement('tr');
//   const createdAt = document.createElement('td');
//   const medianValue = document.createElement('td');
//   createdAt.innerText = new Date().toLocaleString();
//   medianValue.innerText = median;

//   row.appendChild(createdAt);
//   row.appendChild(medianValue);

//   document.querySelector('#medianTabela tbody').appendChild(row);
// }

// document
//   .getElementById('izracunajMediano')
//   .addEventListener('click', calculateMedian);

// function calculateMedian() {
//   const list = Array.from(document.querySelectorAll('#listaStevilk li')).map(
//     (li) => parseInt(li.innerText)
//   );
//   list.sort((a, b) => a - b);

//   let median;
//   if (list.length % 2 === 0) {
//     const mid = list.length / 2;
//     median = (list[mid - 1] + list[mid]) / 2;
//   } else {
//     median = list[Math.floor(list.length / 2)];
//   }

//   let medians = [];
//   if (localStorage.getItem('medians')) {
//     medians = JSON.parse(localStorage.getItem('medians'));
//   }
//   medians.push(median);
//   localStorage.setItem('medians', JSON.stringify(medians));

//   const row = document.createElement('tr');
//   const createdAt = document.createElement('td');
//   const medianValue = document.createElement('td');
//   const deleteBtn = document.createElement('button');

//   createdAt.innerText = new Date().toLocaleString();
//   medianValue.innerText = median;
//   deleteBtn.innerText = 'Delete';
//   deleteBtn.classList.add('izbrisiMediano');

//   deleteBtn.addEventListener('click', function () {
//     medians.splice(medians.indexOf(median), 1);
//     localStorage.setItem('medians', JSON.stringify(medians));
//     row.remove();
//   });

//   row.appendChild(createdAt);
//   row.appendChild(medianValue);
//   row.appendChild(deleteBtn);

//   document.querySelector('#medianTabela tbody').appendChild(row);
// }

// document
//   .getElementById('izracunajMediano')
//   .addEventListener('click', calculateMedian);

function calculateMedian() {
  const list = Array.from(document.querySelectorAll('#listaStevilk li')).map(
    (li) => parseInt(li.innerText)
  );
  list.sort((a, b) => a - b);

  let median;
  if (list.length % 2 === 0) {
    const mid = list.length / 2;
    median = (list[mid - 1] + list[mid]) / 2;
  } else {
    median = list[Math.floor(list.length / 2)];
  }

  const row = document.createElement('tr');
  const createdAt = document.createElement('td');
  const medianValue = document.createElement('td');
  const deleteBtn = document.createElement('button');

  createdAt.innerText = new Date().toLocaleString();
  medianValue.innerText = median;
  deleteBtn.innerText = 'Izbriši';
  deleteBtn.classList.add('izbrisiMediano');

  deleteBtn.addEventListener('click', function () {
    row.remove();
  });

  row.appendChild(createdAt);
  row.appendChild(medianValue);
  row.appendChild(deleteBtn);

  document.querySelector('#medianTabela tbody').appendChild(row);
}

document
  .getElementById('izracunajMediano')
  .addEventListener('click', calculateMedian);
