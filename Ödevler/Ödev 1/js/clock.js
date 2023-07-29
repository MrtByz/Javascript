// Get the name

let myName = prompt("Please enter your name: " );

let greet = document.querySelector("#myName");
greet.innerHTML = myName;

let clock = document.querySelector("#myClock");

clock.onload = showTime();

function showTime(){
    let now = new Date().toLocaleString("tr-TR");
    clock.innerHTML = now;
    setTimeout(showTime, 1000);
}
