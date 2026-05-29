function openWindow(id){
  document.getElementById(id).classList.remove("hidden");
}

function updateClock(){
  const now = new Date();
  const h = now.getHours().toString().padStart(2,'0');
  const m = now.getMinutes().toString().padStart(2,'0');
  document.getElementById("clock").innerText = h + ":" + m;
}

setInterval(updateClock,1000);
updateClock();
