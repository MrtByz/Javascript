// koşul ifadelerinin kullanımı bu js dosyasında yer almaktadır

// Mantıksal operatörler

// değerlerin eşitliği
var a = 10;
var b = "10";
console.log("a=10 b='10' a==b", a==b) // true

// hem değerler hem türler eşitse
var c = 10;
var d = "10";
console.log("c=10 d='10' c===d", c===d) // false

// eşit değilse
console.log("a=10 b='10' a!=b", a != b) // false
console.log("a=10 b='10' a!==b", a!==b) // true

// küçükse
var f = 10;
var g = 10;
console.log("f=10 g=10 f<g", f<g) // false

// ve &&
var h = 10;
var j = "kodluyoruz";
console.log("h>10 && j==kodluyoruz", h>11 && j=="kodluyoruz") // false

// veya ||
console.log("h>10 || j==kodluyoruz", h>11 || j=="kodluyoruz") // true



// Koşul yapısı
var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayısından büyüktür." );
}
else if(x < y){
    console.log(x + " sayisi" + y + " sayısından küçüktür." );
}
else {
    console.log(y + " sayisi" + " " + x + " sayısına eşittir.");
}

// Hackerrank Testi

function weirdOrNot(number)
{
    console.log(number %2 !=0);
    if ((number %2 !=0)||((number%2==0)&&(6<=number)&&(number<=20))) {
        console.log("Weird");
    }
    else if (((number%2==0)&&(2<=number<=5))||((number%2==0)&&(number>20))){
        console.log("Not Weird")
    }
}

function main() {
    const N = prompt("Lütfen Sayı Giriniz...")
    weirdOrNot(N)
}

main();


// Switch Case
let ifade = "a";
switch(ifade){
    case a: console.log("a"); break;
    case b: console.log("b"); break;
    case c: console.log("c"); break;
    default: console.log("def");
}



// Ternary Operatör
var money = 40;
var canBuy = (money<17) ? "Satın alamazsın..": (money>30) ? "Satın alabilirsin..": "Para miktarını girmen lazım..";

console.log(canBuy)

/*let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(boolean)*/ // Undefined


// ÖDEV

/* 1- Prompt ile aldığın bilgiye göre notu yazdır
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49
*/

let grade = prompt("Notunuzu giriniz...")
if (grade >= 0 && grade <=100){
    let result = document.querySelector("#gradeInfo");
    if(grade>=90){
        console.log("AA");
        result.classList.add("text-primary");
        result.innerHTML = "XD";
    }
    else if(grade >= 85){
        console.log("BA");
        result.classList.add("text-primary");
        result.innerHTML = ":D";
    }
    else if(grade >= 80){
        console.log("BB");
        result.classList.add("text-primary");
        result.innerHTML = ":D";
    }
    else if(grade >= 75){
        console.log("CB");
        result.classList.add("text-primary");
        result.innerHTML = ":)";
    }
    else if(grade >= 70){
        console.log("CC");
        result.classList.add("text-primary");
        result.innerHTML = ":)";
    }
    else if(grade >= 65){
        console.log("DC");
        result.classList.add("text-primary");
        result.innerHTML = ":|";
    }
    else if(grade >= 60){
        console.log("DD");
        result.classList.add("text-primary");
        result.innerHTML = ":|";
    }
    else if(grade >= 50){
        console.log("FD");
        result.classList.add("text-primary");
        result.innerHTML = ":|";
    }
    else if(grade >= 0){
        console.log("FF");
        result.classList.add("text-danger");
        result.innerHTML = ":(";
    }
}


