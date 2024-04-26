// help to build an highest score function for this game.


let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
  if (!started) {
    console.log("started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 350);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 350);
}
function levelUp (){
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`;

    let rnadInd = Math.floor(Math.random()*4);
    let ranColor = btns[rnadInd];
    let randBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML = `Game Over!, <b>Your Score : ${level}</b><br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },300);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    let UserColor = btn.getAttribute("id");
    userSeq.push(UserColor);
    
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}
