let time=60;
let score=0;
var value=0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble(){
    var clutter="";
    for (let i = 1; i < 270; i++) {
        let val = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${val}</div>`;
    }
    document.querySelector(".footer").innerHTML = clutter;
}

function getNewHit() {
    value = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = value;
}

function timer(){
    var clearTimer = setInterval(() => {
    if(time>0){
    time--;
    document.querySelector("#timerval").textContent = time;
    }
    else{
        clearInterval(clearTimer);
        document.querySelector(".footer").innerHTML = `<h1>Game Over</h1>`;
    }
}, 1000);
}

document.querySelector(".footer").addEventListener("click",function(details){
    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber==value)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

function Reset(){
    if(time==0)
    {
        score=0;
        document.querySelector("#scoreval").textContent = score;
        time=60;
        getNewHit();
        timer();
        makeBubble();
    }
}

getNewHit();
timer();
makeBubble();