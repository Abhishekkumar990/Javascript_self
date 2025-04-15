let countdownInterval;

document.getElementById('start').addEventListener('click', function() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    if (seconds < 0 || seconds > 59 || minutes < 0) {
        alert("Please enter valid minutes and seconds (0-59).");
        return;
    }

    let totalSeconds = minutes * 60 + seconds;

    if (totalSeconds === 0) {
        alert("Time must be greater than 0.");
        return;
    }

    updateDisplay(totalSeconds);

    countdownInterval = setInterval(() => {
        totalSeconds--;
        updateDisplay(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            alert("Time is up!");
            document.getElementById('countdownDisplay').textContent = "⏰ Done!";
        }
    }, 1000);
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(countdownInterval);
    document.getElementById('countdownDisplay').textContent = "⏹️ Timer stopped.";
});

function updateDisplay(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    document.getElementById('countdownDisplay').textContent = `⏱️ Time Remaining: ${min} min ${sec < 10 ? '0' : ''}${sec} sec`;
}