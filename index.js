const inputTime = document.getElementById("time");
const buttons = document.querySelector(".buttons");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");

// let ticking;
// function startTimer() {
//     //gets time in seconds
//     let timeLeft = (Number(minutes.textContent) * 60) + Number(seconds.textContent);
//     //begins countdown every second
//     ticking = setInterval(() => {
//         timeLeft--;
//         //gets time left in minutes and seconds
//         minutes.textContent = `${(Math.floor(timeLeft / 60))}`;
//         seconds.textContent = `${timeLeft % 60}`;    
//         if (timeLeft <= 0) {
//             stopTimer(ticking);
//         }
//     }, 1000);
// }

let ticking;
let timeLeft;
function startTimer() {
    //gets time in seconds
    timeLeft = (Number(minutes.textContent) * 60) + Number(seconds.textContent);
    //begins countdown every second
    let startTicking = new Promise(function (resolve) {
        resolve(timeLeft);
    })
    startTicking.then(function (remainder) {
        ticking = setInterval(() => {
            remainder--;
            //gets time left in minutes and seconds
            minutes.textContent = `${(Math.floor(remainder / 60))}`;
            seconds.textContent = `${remainder % 60}`;
            if (remainder <= 0) {
                stopTimer(ticking);
            }
        }, 1000)
    })
}

function stopTimer(timer) {
    clearInterval(timer);
    minutes.textContent = `0`;
    seconds.textContent = `0`;
}

function pauseTimer(timer) {
    clearInterval(timer);
}

function getDecimalPlaces(time) {
    //gets remainder minutes in seconds
    const splitTime = time.split(".")
    if (splitTime[1] > 0) {
        const remainderMinutes = `0.${splitTime[1]}`;
        return Number(remainderMinutes) * 60;
    } else {
        return 0;
    }
}

document.getElementById("session").addEventListener("click", (e) => {
    switch (e.target.id) {
        case "btn-plus":
            inputTime.value++;
            break;
        case "btn-minus":
            inputTime.value--;
            break;
    }
});

buttons.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "btn-start":
            //resets timer if it is already running
            stopTimer(ticking);
            //checks if input is larger than 1 minute to include minutes
            if (inputTime.value >= 1) {
                minutes.textContent = Math.floor(inputTime.value);
                seconds.textContent = getDecimalPlaces(inputTime.value);
                startTimer();
            }
            //checks if input is smaller than 1 minute to only include seconds if greater than 0
            else if ((inputTime.value < 1) && (inputTime.value > 0)) {
                seconds.textContent = getDecimalPlaces(inputTime.value);
                startTimer();
            }
            break;
        case "btn-reset":
            stopTimer(ticking);
            break;
        case "btn-pause":
            pauseTimer(ticking);
            break;
        case "btn-continue":
            startTimer();
    }
})


