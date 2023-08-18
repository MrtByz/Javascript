
// Artist objesi oluşturuldu

let artist = {
    name: "Zoe",
    album:{
        title: "Reptilectric",
        year: 2008
    }
};


let mesaj = "mesaj";
let mesaj2 = "mesaj";

console.log(mesaj == mesaj2); // true


// Mesajlar aynı olsa da objelerin memorydeki yeri farklı olduğundan false döner
let obje = {
    mesaj: "mesaj"
};

let obje2 = {
    mesaj: "mesaj"
}

console.log(obje == obje2); // false


// Obje Oluşturma Yolları

//  1 Object Literals Yöntemi

let countriesTalkSpanish = {
    continent: "south america",
    language: "spanish"
}

// 2 New Keywordü ile

let countriesTalkFrench = new Object();     
countriesTalkFrench.continent = "africa";     
countriesTalkFrench.language = "french"; 


// 3 Object.create ile

let noInheritence = Object.create(null);   //herhangi bir kalıtım(inheritence) almaz
let standartObject = Object.create(Object.prototype) //standart obje kalıtımı alır.
let argentina = Object.create(countriesTalkSpanish)


// Key - value Erişimi

let car = {
    brand: "BMW",
    year: 2020,
    isManuel: true
}

console.log("Brand: "+car.brand)
console.log("Year: "+car.year)
console.log("Shift Manuel: "+car.isManuel)

car["KM"] = 3000
console.log("Distance: "+car.KM)


// Computed Property objedeki hangi propertynin güncelleneceğini dinamik olarak seçmemizi sağlar
function objectify(key, value){
    return {
        [key]: value
    }
}

// Kompleks obje

let state = {
    users:[
        {name: "Brock", age: 25, favoriteColor: "red"},
        {name: "Jessie", age: 17, favoriteColor: "yellow"},
        {name: "James", age: 41, favoriteColor: "blue"},
        {name: "Winnie", age: 18, favoriteColor: "purple"}
    ],
    settings:{
        version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
    },
    banList: ["Ash", "Angelica", "Tom", "Jerry"]
}

console.log(state.settings.website)



// JSON'dan objeye dönüşüm

const veri = require("jsonpath") // json pathini require ile okuyarak obje oluşturulur

// Obje metodları

Object.keys(state) // ["users", "settings","banList"]
Object.values(state) // [[{name: "Brock", age: 25, favoriteColor: "red"},{name: "Jessie", age: 17, favoriteColor: "yellow"},{name: "James", age: 41, favoriteColor: "blue"},{name: "Winnie", age: 18, favoriteColor: "purple"], ...]
Object.entries(state) // [key, value] çiftlerinden oluşan array döner


// JSON metodları

let person = {
    name: "Jack",
    age: 20
  };
  
  document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.
  
  let stringObject = JSON.stringify(person);
  
  let newPerson = JSON.parse(stringObject); 
  // parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir




















