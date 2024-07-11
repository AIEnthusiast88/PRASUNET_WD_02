let timer;
let running = false;
let elapsedTime = 0;

function startStop() {
    if (!running) {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").textContent = "Stop";
    } else {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    }
    running = !running;
}

function updateTime() {
    elapsedTime++;
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    document.getElementById("display").textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    const laps = document.getElementById("laps");
    laps.innerHTML = "";
    const emoji = document.createElement("div");
    emoji.innerHTML = "✨ Reset Complete! ✨";
    emoji.className = "emoji";
    laps.appendChild(emoji);
    setTimeout(() => {
        laps.removeChild(emoji);
    }, 3000);
}

function lap() {
    if (running) {
        let lapTime = document.getElementById("display").textContent;
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        document.getElementById("laps").appendChild(lapItem);
        lapItem.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    const colors = ["#FFDDC1", "#FFE8E8", "#D4F0FF", "#C1FFD7", "#FFFAC1"];
    return colors[Math.floor(Math.random() * colors.length)];
}
