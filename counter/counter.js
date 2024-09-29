const numberContainer = document.querySelector('.number-container');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');

let count = 0;
numberContainer.textContent = count;

decreaseButton.addEventListener('click', (event) => {
    count--;
    numberContainer.textContent = count;
});
resetButton.addEventListener('click', (event) => {
    count = 0;
    numberContainer.textContent = count;
});
increaseButton.addEventListener('click', (event) => {
    count++;
    numberContainer.textContent = count;
})