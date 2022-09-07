const nameInput = document.getElementById('name-input');
const button = document.getElementById('submit');
const nameDisplay = document.getElementById('name-display');
button.addEventListener('click', () => {
    const name = nameInput.value;
    nameDisplay.textContent = name;
    nameInput.value = '';
});

console.log(nameDisplay);
