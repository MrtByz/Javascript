// Arrays

let dizi = [1,2,3,4,5];

// arrays can keep different typed items inside
let differentTypes = [1,2,3,"murat",false,{title:"kodluyorum"}];

// Reaching array elements

console.log(differentTypes[0]);

for(let i=0;i<dizi.length;i++){
    console.log(dizi[i]);
}


// reaching elements in 2D Array
let arr = [["dört","beş","altı"]];
console.log(arr[0][2]);

// inserting and removing items from array

dizi.push(6) // inserts the item to the end of the array

dizi.unshift(0) // inserts the item to the head of the array

// this function can be used for both inserting and removing 
//first parameter is the index second parameter is the number items that the function will remove
dizi.splice(1,0,8); 

dizi.pop() // removing last item
dizi.shift() // removing from head
dizi.splice(1,1) // removing item at the given index

// Other functions for arrays

dizi.includes(5) // checking for if the given item exists in the array
dizi.slice(0,2) // creates a new array from existing array which starts from the first index ends at second index
dizi.join() // combining all items and creates a string
differentTypes.concat(dizi); // combining two arrays

// forEach iterating all items in array and applies the given function
const malzemeler = ["yumurta", "un", "süt"];
malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});


// map same as forEach but this function keeps the result in a different array
const sayilar = [1,2,3];

let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});

// some checking array for if there is a number bigger than 5 if yes returns true else false
const sonuc1 = sayilar.some(function(sayi) {
    return sayi > 5 ;
});


// every checks if the given condition fits for all items in array
const sonuc2 = sayilar.every(function(sayi) {
    return sayi > 5;
});


// filter creates a new array with the items which fits the conditions
const filtrelenmisSayilar = sayilar.filter(function(sayi) {
    return sayi >3;
});

// find returns the first item which fits the condition
const bulunacakEleman2 = sayilar.find(function(sayi) {
    return sayi > 5;
});

// sort sorting items in array
let numbers = [3,5,2,10,4]
numbers.sort(); // returns [10,2,3,4,5] because sorts with utf-16

numbers.sort(function(a,b) {
    return b-a;
}); // returns [10,5,4,3,2]

//  reduce
const reducableNumbers = [10,20,30];

// this function will sum the items in array
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}

// function will start summing from 0
const reduced = reducableNumbers.reduce(indirgeyici,0); // 0+10+20+30

// 2d arrays

const picnicBox = [
    ["apple",3],
    ["banana",5],
    ["bread", 2]
];

// or

let pencilCase = new Array();
pencilCase[0] = new Array("Rubber", 2 ,"blue");
pencilCase[1] = new Array("Pencil", 3, "red");
pencilCase[2] = new Array("Ruler", 1, "black");


// Exercise 1: Create a new array from the given array that contains numbers bigger than 10 multiplied by 5
let ex1 = [2,5,8,11,15,17];

let result1 = ex1.filter(function (sayi){
    return sayi > 10;
})

result1 = result1.map(function (sayi){
    return sayi*5;
})
console.log(result1);

// Execise 2: Write a function that prints "There is a number bigger than 5!" there is an element fits the condition in array

let ex2 = [3,6,9,14,16];


function myFunction(diziTest){
    if (ex2.some(function(sayi){
        return sayi > 5
    })){
        console.log("There is a number bigger than 5!");
    }
    else{
        console.log("There is not a number bigger than 5!");
    }
}

myFunction(ex2);

// Exercise 3: Write a function multiplies items in array
let ex3 = [2,3,4];

function multi(aku, starter){
    return aku * starter;
}

let result3 = ex3.reduce(multi, 1)
console.log(result3);























