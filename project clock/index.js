const hourEl = document.getElementById("Hour");
const minutesEl = document.getElementById("Minutes");
const secondsEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("AMPM");

function updateClock () {
   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let ampm = "AM";

   if (h > 12) {
      h = h - 12;
      ampm = "PM";
   }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;

   hourEl.innerHTML = h;
   minutesEl.innerHTML = m;
   secondsEl.innerHTML = s;
   ampmEl.innerHTML = ampm;
   setTimeouts(() => {
     updateClock();
   }, 1000);
}

updateClock();