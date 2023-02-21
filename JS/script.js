let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("Saved")
let TatalCountEl = document.getElementById("TatalCount")

let count = 0
let total=0;

//let TotalText=TatalCountEl.textContent;
function increment() {
    count += 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save(){

    let content=" "+count+" - ";
    
    welcomeEl.textContent+=content;
    SetCountToZeroAndSunm();
    TatalCountEl.textContent="Total Count: "+total;
    
    
    
}

function SetCountToZeroAndSunm()
{
    total+=count;
    count=0;
    countEl.textContent=count;
}




