let getName= prompt("Введіть своє ім'я");
let userName = document.getElementById("youName");
userName.textContent = getName;


let youVictory = document.getElementById("youVictory");
let youCount= 0;
youVictory.textContent =youCount;


let compVictory = document.getElementById("compVictory");
let compCount = 0;
compVictory.textContent=compCount;

function Generate(){
    let youNamber = document.getElementById("youNamber");
    let compNamber= document.getElementById("compNamber");

    let yNam = Math.floor(Math.random()*20);
    let cNam = Math.floor(Math.random()*20);
    youNamber.textContent=yNam;
    compNamber.textContent=cNam;

if(yNam>cNam){
    youCount++;
    youVictory.textContent =youCount;
}else if(yNam<cNam){
    compCount++;
    compVictory.textContent=compCount;
}
if(youCount === 3){
    alert(getName+ " win!!!!!");
    resetGame();
}
else if(compCount ===3){
    alert("Computer win :(")
    resetGame();
}
}
function resetGame(){
    youCount = 0;
    compCount =0;
    youVictory.textContent =youCount;
    compVictory.textContent=compCount;
    document.getElementById("youNamber").textContent="";
    document.getElementById("compNamber").textContent="";

}