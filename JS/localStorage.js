// Local Storage ile counter
// Local storageda json veri tutarken json.stringify ile stringe çevir
// Daha sonra okurken json.parse ile stringi tekrar json yap

// window.localStorage.setItem("counter", 0);

let increase = document.querySelector("#arttir");
let decrease = document.querySelector("#azalt");
let counter = document.querySelector("#counter");
let count = window.localStorage.getItem("counter") ? window.localStorage.getItem("counter"): 0;
increase.addEventListener("click", clickEvent);
decrease.addEventListener("click", clickEvent);
counter.innerHTML = window.localStorage.getItem("counter");

function clickEvent(){
    if(this.id == "arttir"){
        count = Number(count) + 1;
        window.localStorage.setItem("counter", count);
        counter.innerHTML = count;
    }
    else{
        count = Number(count) - 1;
        window.localStorage.setItem("counter", count);
        counter.innerHTML = count;
    }
}


