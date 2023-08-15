
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


























