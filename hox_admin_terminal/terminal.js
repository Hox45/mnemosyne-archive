const boot = document.getElementById("boot");
const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const commandInput = document.getElementById("command");

const lines = [
"INITIALIZING SYSTEM...",
"CONNECTING TO NETWORK...",
"NODE STATUS: ONLINE",
"ACCESS LEVEL: UNKNOWN",
"WELCOME BACK HOX"
];

let i = 0;

function bootSequence(){
  if(i < lines.length){
    boot.innerHTML += lines[i] + "\n";
    i++;
    setTimeout(bootSequence,800);
  }else{
    setTimeout(()=>{
      boot.style.display="none";
      terminal.classList.remove("hidden");
    },1000);
  }
}

bootSequence();

const commands = {
help:`
help
whoami
admin
sector7
signal
scan
clear
`,

whoami:"USER: HOX45",
signal:"UNKNOWN SIGNAL DETECTED",
scan:"NETWORK SCAN COMPLETE"
};

commandInput.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    const cmd = commandInput.value.trim();

    output.innerHTML += `<div>> ${cmd}</div>`;

    if(cmd==="clear"){
      output.innerHTML="";
    }
    else if(commands[cmd]){
      output.innerHTML += `<div>${commands[cmd]}</div>`;
    }
    else if(cmd==="admin"){
      window.location.href="admin.html";
    }
    else if(cmd==="sector7"){
      window.location.href="sector7.html";
    }
    else{
      output.innerHTML += `<div>COMMAND NOT FOUND</div>`;
    }

    commandInput.value="";
  }
});
