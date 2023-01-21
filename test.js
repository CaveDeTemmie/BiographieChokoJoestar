let endDate = new Date();
endDate.setFullYear(2023);
endDate.setMonth(11);
endDate.setDate(31);
endDate.setHours(23, 59, 59, 999);
let timer;

function startTimer() {
  timer = setInterval(function() {
    let now = new Date();
    let diff = endDate - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("time").innerHTML = days + " jours, " + hours + " heures, " + minutes + " minutes et " + seconds + " secondes";
    if (diff <= 0) {
      clearInterval(timer);
      document.getElementById("time").innerHTML = "confetti()";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById("time").innerHTML = "";
}
if (diff <= 0) {
  clearInterval(timer);
  document.getElementById("time").innerHTML = "1er janvier 2023 !";
  confetti();
}