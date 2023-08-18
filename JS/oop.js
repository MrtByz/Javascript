
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
  
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir
let newPerson = JSON.parse(stringObject); 

// Nesnelere metot eklemek

var person2 = {
	name: 'Murat',
	surname: 'Beyaz',
	age: 27,
	city: 'Istanbul',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};

console.log(person2.introduce())

person2.myCity = function () {
	console.log(`I live in ${this.city}`);
};
person2.myCity();

// JS Object Constructor
function Insan(isim,yas) {
    this.isim = isim;
    this.yas = yas;
  }

const neva = new Insan("neva",0);
console.log(neva.yas);

// Destructuring

const foo = { a: 123, b: true }
const {a,b} = foo;


// sayi1 ve sayi2 parameterelerinden biri verilmezse NaN döner bu nedenle parametrelere default değer atanmalıdır.
// eğer sayi2 örneğin hiç verilmezse "cikarma = ( { sayi1})" gibi reference error verir
const cikarma = ( { sayi1, sayi2 } ) => { 
    // Bu satira dikkat
    return sayi1 - sayi2;
}
const sayilar = {
    sayi2: 3,
    sayi1: 5
}
cikarma(sayilar);  // 2 döner



// Rest Operator
const toplama = ({ sayi1, sayi2 }) => { 
    // dikkat sadece 2 sayireturn sayi1 + sayi2 + sayi3 + sayi4 + sayi5;
    return sayi1 + sayi2
    }
const sayilar2 = {
    sayi1: 8,
    sayi2: 4,
    sayi3: 7,
    sayi4: 9,
    sayi5: 11
}
toplama(sayilar2); 


const toplama2 = ({ sayi1, sayi2, ...args }) => {
    let sonuc = sayi1 + sayi2;
    for (let sayi in args){
     sonuc += args[sayi];
    }
    return sonuc;
   }

toplama2(sayilar2);





