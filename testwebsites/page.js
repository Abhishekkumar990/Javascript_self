document.getElementById("container").addEventListener('click', (e) => {
    e.preventDefault();
    const firstValue = document.getElementById('firstValue').value;
    const secondValue = document.getElementById('secondData').value;


    function add() {
        let data = firstValue + secondValue;
        document.getElementById('display').textContent = data;

    }
    add()





})