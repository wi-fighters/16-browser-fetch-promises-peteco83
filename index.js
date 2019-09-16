const session = document.getElementById("session");
const inputTime = document.getElementById("time");
const startButton = document.getElementById("btn-start");
const timerDisplay = document.getElementById("timer");


session.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "btn-plus":
            inputTime.value++;
            break;
        case "btn-minus":
            inputTime.value--;
            break;
    }
});

function startTimer() {
    let timeLeft = inputTime.value * 60;
    setInterval(() => {
        timeLeft--;
        document.querySelector(".mins").textContent = `${Math.floor(timeLeft / 60)}`;
        document.querySelector(".secs").textContent = `${timeLeft % 60}`;
    }, 1000)
}

startButton.addEventListener("click", () => {
    startTimer();
})

// Pause timer 
// Starting timer at 0 - handle case
// Ending timer
