//Lista números nos botões na ul com classe center
const ul = document.querySelector('.center');
const viewDiv = document.querySelector('.view');

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


Object.entries(numeros).map(([key, value]) => {
    const button = document.createElement('button');
    button.textContent = value;
    button.addEventListener('click', () => {
        viewDiv.textContent = value;
    });
    ul.appendChild(button);
});