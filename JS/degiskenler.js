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
let isActive = false
console.log("False olarak tanımlandı ", isActive)
isActive = true
console.log("True olarak tanımlandı ", isActive)

Boolean("11") // True
Boolean("0") // True
Boolean("") // False

userName = "mrtbyz"
IsUsername = Boolean(userName)
console.log("Username var mı? ", IsUsername)

Boolean(0) // False
Boolean(-0) // False
Boolean(-0.1) // True
Boolean(userName.length > 0) // True

// Veri Türünü Öğrenmek

let prize = 111
let stringPrize = "111"
let hasPassword = true

console.log(
    "prize type: ",
    typeof(prize)
)

console.log(
    "prize type #2: ",
    typeof(stringPrize)
)

console.log(
    "hasPassword type: ",
    typeof(hasPassword)
)


// String verileri int ve floata dönüştürmek

let number1 = "11"
console.log(
    "number1: ", parseInt(number1)
)

console.log(
    "Floata cast edilmiş number1'ın tipi: ", typeof(parseFloat(number1))
)

// Number veri tipinden stringe dönüştürmek
 let digitNumber = 55
 console.log(
    "Number: ", digitNumber,
    " Cast Edilmiş Tipi: ", typeof(digitNumber.toString())
 )


 // Template Literals Kullanımı

let user = "MrtByz"
const DOMAIN = "jsdersleri.com"

let email = user + "@" + DOMAIN

console.log(
    "Merhaba ", user,
    "sitemize hoşgeldin! Mail adresin: ", email 
)

// Yukarıdaki print için kullanılan yöntem yerine 
// tek string halinde template literals kullanılarak yazılabilir
// TEK TIRNAK DEĞİL BACK TICK KULLANILACAK

info = `Merhaba ${user} sitemize hoşgeldin! Mail adresin: ${email}`
console.log(info)


// HTML Dosyasına yazı yazdırmak
document.body.innerHTML = info;

// Template Literals ile yazalım!!! 
const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
const bookTable =
    "<table border>"+
    "<tbody>"+
    "<tr>"+
    "<td>"+"Kitap"+"</td>"+
    "<td>"+kitap.ad+"</td>"+
    "</tr>"+
    "<tr>"+
    "<td>"+"Yazar"+"</td>"+
    "<td>"+kitap.yazar+"</td>"+
    "</tr>"+
    "<tr>"+
    "<td>"+"Tarih"+"</td>"+
    "<td>"+kitap.tarih+"</td>"+
    "</tr>"+
    "</tbody>"+
    "</table>"

bookTableLiteral = `
<table border>
<tbody>
<tr><td> Kitap </td><td> ${kitap.ad} </td></tr>
<tr><td> Yazar </td><td> ${kitap.yazar} </td></tr>
<tr><td> Tarih </td><td> ${kitap.tarih} </td></tr>
</tbody>
</table border>
`
document.body.innerHTML = bookTableLiteral


// String Veri Tipi

let stringOrnegi = "Bu bir örnek string";

// Karakter sayısı
console.log("Örnek Stringdeki karakter sayısı: ", stringOrnegi.length)

// ilk karakter
console.log("Örnek stringteki ilk karakter: ", stringOrnegi[0])

// büyük harf - küçük harf
console.log("Örnek string büyük harflerle: ", stringOrnegi.toUpperCase())
console.log("Örnek string büyük harflerle: ", stringOrnegi.toLowerCase())

// string içinde istenen bilgiyi aratmak -> search
// aranan şey stringde yoksa -1 döner
console.log("Örnek stringde ö harfinin yeri", stringOrnegi.search('ö'))

// Stringin belli bir bölümünü alma -> slicing
console.log("Örnek stringde 5. karakter ve sonrası: ", stringOrnegi.slice(5))
console.log("Örnek stringde 0-5. karakter arası: ", stringOrnegi.slice(0,5))

// bilgiyi değiştirme -> replace
console.log("Örnek stringde örnek->değişmiş: ", 
stringOrnegi.replace("örnek", "değişmiş"))

// istediğim bilgi var mı? -> includes
console.log("Stringde Murat var mı?: ", stringOrnegi.includes("Murat"))

// istediğim bilgiyle başladı mı bitti mi -> startsWith, endsWith
console.log("String murat ile mi başlıyor?: ", stringOrnegi.startsWith("Murat"))
console.log("String murat ile mi bitiyor?: ", stringOrnegi.endsWith("Murat"))

