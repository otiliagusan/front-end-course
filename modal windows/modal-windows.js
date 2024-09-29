
// targeting elements
const firstModalButton = document.querySelector('.first');
const secondModalButton = document.querySelector('.second');
const thirdModalButton = document.querySelector('.third');
const modalContainer = document.querySelector('.modal');
const cancelButton = document.querySelector('.cancel');
const yesButton = document.querySelector('.yes-button');
const content = document.querySelector('.content');
const closeButton = document.querySelector('.icon');

// Function to show the modal and apply blur
function showModal() {
    modalContainer.classList.remove('hidden'); // Show the modal
    content.classList.remove('hidden'); // Apply blur to background content
}
//function for closing the modal
function closeModal() {
    modalContainer.classList.add('hidden');
    content.classList.remove('blur');
}

//event listeners for the buttons
firstModalButton.addEventListener('click', showModal);
secondModalButton.addEventListener('click', showModal);
thirdModalButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
yesButton.addEventListener('click', closeModal);
cancelButton.addEventListener('click', closeModal);

