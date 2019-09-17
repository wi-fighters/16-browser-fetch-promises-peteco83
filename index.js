// const session = document.getElementById("session");
const inputTime = document.getElementById("time");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");

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

let ticking;
function startTimer() {
    let timeLeft = (Number(minutes.textContent) * 60) + Number(seconds.textContent);
    if (timeLeft > 0) {
        ticking = setInterval(() => {
            timeLeft--;
            minutes.textContent = `${(Math.floor(timeLeft / 60))}`;
            seconds.textContent = `${timeLeft % 60}`;
        }, 1000);
        
    } else if (timeLeft <= 0) {
        stopTimer(ticking);
    }
}

function stopTimer(timer) {
    clearInterval(timer);
    minutes.textContent = `00`;
    seconds.textContent = `00`;
}

function pauseTimer(timer) {
    clearInterval(timer);
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "btn-start":
        
            minutes.textContent = inputTime.value;
            startTimer();
            break;
        case "btn-reset":
            stopTimer(ticking);
            break;
        case "btn-pause":
            pauseTimer(ticking);
    }
})

