// Fonksiyon

function printHello(name){
    console.log("Merhaba ", name)
}

printHello("Murat")

// İsimsiz Fonksiyon ile fonksiyon değişkene atanır

var add = function (sayi1, sayi2){
    console.log(sayi1 + sayi2);
}

console.log(add(2,1))

// Asenkron çalışma
// Javascript asenkron çalışır yani kodlar yukarıdan aşağı çalışır ama alt satır çalışmak için üst satırın bitmesini beklemez
// setTimeout fonksiyonu ile 2. fonksiyonu 3 saniye uyutursak 3. fonksiyonun çıktısının 2den önce geldiği görülür

function printScreen1 (){
    console.log("“İlk ekran çıktısı”");
}

 function printScreen2 (){
   setTimeout(function(){
    console.log("“İkinci ekran çıktısı”")  
    }, 3000);
}

function printScreen3 (){
    console.log("“Üçüncü ekran çıktısı”");
}
printScreen1();
printScreen2();
printScreen3();


// Bu asnekronluktan kurtulmak için callback yapısı kullanılır
// Yukardaki örneğin sıralı halde çalışması için aşağıdaki yöntem kullanılabilir

function CBprintScreen1() {
    console.log("CB - İlk ekran çıktısı");
  }

  function CBprintScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("CB - İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function CBprintScreen3() {
    console.log("CB - Üçüncü ekran çıktısı");
  }


 CBprintScreen2(CBprintScreen1, CBprintScreen3);

// Arrow Function

let carpim = (param1, param2) => param1 * param2

console.log(carpim(3,5))

// Arrow functionda { } karakterleri olduğundan return yapmak zorundayız
var feedTheCat = (cat) => {
    if (cat === 'hungry') {
      return 'Feed the cat';
    } else {
      return 'Do not feed the cat';
    }
  }

// İlginç bir fonksiyon kullanımı

function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs"); // Cemre are you interested in nodejs?


// Hackerrank Challenge

function factorial(param){
    if (param == 0){
        return 1;
    }
    return param * factorial(param-1);
}

console.log("Recursive Factorial Calculation for 5: ", factorial(5));


// Bir film listesini indexleriyle bastırma

const seriesList = list => {
    list.forEach((series, index) => {
      console.log(`${index+1}. ${series}`) 
    });
};
  
seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);














