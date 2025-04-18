document.getElementById('ageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('ageFind').value);

    if (isNaN(age)) {
        document.getElementById('message').textContent = 'enter valid value';
        alert('valid number')
    } else if (age <= 18) {
        document.getElementById('message').textContent = 'value is invalid';

    } else {

        document.getElementById('message').textContent = 'valid value';
    }
})