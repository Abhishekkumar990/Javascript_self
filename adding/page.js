document.getElementById('actionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fvalue = parseInt(document.getElementById('first').value);
    const svalue = parseInt(document.getElementById('second').value);
    if (isNaN(fvalue || svalue)) {
        document.getElementById('display').textContent = 'Please enter valid numner';

    } else {
        let a = fvalue + svalue;
        document.getElementById('display').textContent = a;
    }



})