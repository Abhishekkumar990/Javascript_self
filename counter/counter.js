let counter = 0;

const countDisplay = document.getElementById('display');

document.getElementById('add').addEventListener('click', () => {
    counter++;
    countDisplay.value = counter;
});

document.getElementById('sub').addEventListener('click', () => {
    counter--;
    countDisplay.value = counter;
});

document.getElementById("reset").addEventListener("click", () => {
    counter = 0;
    countDisplay.value = 0;
});