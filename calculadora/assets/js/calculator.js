//Lista números nos botões na ul com classe center
const numeros = {
    1: 7,
    2: 8,
    3: 9,
    4: 4,
    5: 5,
    6: 6,
    7: 1,
    8: 2,
    9: 3
};

const ul = document.querySelector('.center');

Object.entries(numeros).map(([key, value]) => {
    const button = document.createElement('button');
    button.textContent = value;
    ul.appendChild(button);
});