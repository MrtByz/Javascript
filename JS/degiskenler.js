// var ile değişken tanımlama
// modern yapıda var yok
var serverName1 = "serverım_da_serverım.org"

// let ile değişkeni boş tanımlamak

let serverName2;
serverName2 = "serverım_da_serverım.org"

// let ile değişkene bilgi atayarak tanımlamak
// bir değiken kullanımdan sonra let ile tanımlanırsa hata verir var ile tanımlanırsa undefined gösterir
// hata görmek açısından let daha iyi
let password = "123456789mb"

// const ile değişkeni tanımlama
// değişkenin tuttuğu bilginin değişmemesi gerekiyorsa const kullanılır
// const ile değişken tanımlanırken değer de verilmelidir
// const ile tanımlanan değişken sonradan değiştirilemez atama yapılamaz
const serverName3 = "serverım_da_serverım.org"


// DEĞİŞKEN İSİMLENDİRME STANDARTLARI

// camelCase kulanımı

let serverName4;

// Number veri türü

let price = 100
let tax =  0.18
let priceTax = price * tax
console.log("KDV Tutarı: ", priceTax)

// Number arttırma azaltma işlemleri

let counter = 0
counter = counter + 1;
counter += 1;
counter++;

counter = counter - 1;
counter -= 1;
counter--;

// mod alma

kalan = counter % 10
console.log("0%10 Kalan: ", kalan)
console.log("3%10 Kalan: ", 3%10)

// üs alma
counter = 5;
üslü = counter ** 2;
console.log("5**2 Sonuç: ", üslü)

kalan = 10 / 3;

// aşağı yuvarlama
console.log("10/3'ü Aşağı Yuvarla: ", Math.floor(kalan))

// yukarı yuvarlama
console.log("10/3'ü Yukarı Yuvarla: ", Math.ceil(kalan))

// yakına yuvarlama
console.log("10/3'ü Yakına Yuvarla: ", Math.round(kalan))

// boolean değerler
// Git dev branch test