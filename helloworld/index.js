window.onload = function() {
    const res = document.getElementById('display_result');

    function appendToDisplay(value) {
        res.value += value;
    }

    function calculateResult() {
        try {
            res.value = eval(res.value);
        } catch (error) {
            res.value = 'Error';
        }
    }

    function clearDisplay() {
        res.value = '';
    }

    document.getElementById('add').addEventListener('click', () => appendToDisplay('+'));
    document.getElementById('sub').addEventListener('click', () => appendToDisplay('-'));
    document.getElementById('mul').addEventListener('click', () => appendToDisplay('*'));
    document.getElementById('div').addEventListener('click', () => appendToDisplay('/'));

    document.getElementById('1').addEventListener('click', () => appendToDisplay('1'));
    document.getElementById('2').addEventListener('click', () => appendToDisplay('2'));
    document.getElementById('3').addEventListener('click', () => appendToDisplay('3'));
    document.getElementById('4').addEventListener('click', () => appendToDisplay('4'));
    document.getElementById('5').addEventListener('click', () => appendToDisplay('5'));
    document.getElementById('6').addEventListener('click', () => appendToDisplay('6'));
    document.getElementById('7').addEventListener('click', () => appendToDisplay('7'));
    document.getElementById('8').addEventListener('click', () => appendToDisplay('8'));
    document.getElementById('9').addEventListener('click', () => appendToDisplay('9'));
    document.getElementById('0').addEventListener('click', () => appendToDisplay('0'));

    document.getElementById('clear').addEventListener('click', clearDisplay);
    document.getElementById('eql-btn').addEventListener('click', calculateResult);
};