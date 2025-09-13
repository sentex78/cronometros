let countdown;

function startTimer(minutes) {
  clearInterval(countdown);
  let time = minutes * 60; // segundos totales
  updateDisplay(time);

  countdown = setInterval(() => {
    time--;
    updateDisplay(time);

    if (time <= 0) {
      clearInterval(countdown);
      alert("⏰ ¡Tiempo terminado!");
    }
  }, 1000);
}

function updateDisplay(time) {
  let mins = Math.floor(time / 60);
  let secs = time % 60;
  document.getElementById("timer").textContent =
    String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}
