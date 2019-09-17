const session = document.getElementById("session");
const inputTime = document.getElementById("time");

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

let ticking;
function startTimer() {
    let timeLeft = inputTime.value * 60;
    if (timeLeft > 0) {
        ticking = setInterval(() => {
            timeLeft--;
            document.querySelector(".mins").textContent = `${(Math.floor(timeLeft / 60))}`;
            document.querySelector(".secs").textContent = `${timeLeft % 60}`;
        }, 1000);
    } else if (timeLeft <= 0) {
        stopTimer(ticking);
    }
}

function stopTimer(timer) {
    clearInterval(timer);
    document.querySelector(".mins").textContent = `00`;
    document.querySelector(".secs").textContent = `00`;
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "btn-start":
            startTimer();
            break;
        case "btn-reset":
            stopTimer(ticking);
            break;
    }
})

