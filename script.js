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
      playBeep(); // 🔔 reproducir beep
    }
  }, 1000);
}

function updateDisplay(time) {
  let mins = Math.floor(time / 60);
  let secs = time % 60;
  document.getElementById("timer").textContent =
    String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

// ✅ función beep de 1 segundo
function playBeep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(1000, ctx.currentTime); // 1000 Hz
  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 1); // dura 1 segundo
}
