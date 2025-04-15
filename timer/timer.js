let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const timeDisplay = document.getElementById("digitalTime");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

// Format time
function formatTime() {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateClockHands() {
    const secDeg = seconds * 6;
    const minDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = hours * 30 + minutes * 0.5;

    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

function updateTimeDisplay() {
    timeDisplay.textContent = formatTime();
    updateClockHands();
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
        resetBtn.disabled = false;
    } else {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                    if (hours === 24) hours = 0;
                }
            }
            updateTimeDisplay();
        }, 1000);

        startStopBtn.textContent = "Stop";
        resetBtn.disabled = true;
    }

    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    isRunning = false;
    updateTimeDisplay();
    startStopBtn.textContent = "Start";
    resetBtn.disabled = true;
}

startStopBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial
updateTimeDisplay();