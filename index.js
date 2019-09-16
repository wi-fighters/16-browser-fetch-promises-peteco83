const session = document.getElementById("session");
const inputTime = document.getElementById("time");
const startButton = document.getElementById("btn-start");
const timerDisplay = document.getElementById("timer");

session.addEventListener("click", (e) => {
    switch(e.target.id) {
        case "btn-plus":
        inputTime.value++;
        break;
        case "btn-minus":
        inputTime.value--;
        break;
    }
});





