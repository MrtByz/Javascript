// addEventListener ile butona aktivite eklendi.

const buton = document.querySelector("#button");
buton.addEventListener('click', function(){
    alert("Butona Tıklandı!!!");
})


// Fonksiyon ismi ile butona aktivite eklendi.
const buton2 = document.querySelector("#button2");
buton2.addEventListener('click', btnClicked);
function btnClicked(){
    alert("Fonksiyon ismiyle butona aktivite eklendi!!!")
}

// Mouse etkinliği ile aktivite eklendi.

const doubleClick = document.querySelector("#dblClick");
doubleClick.addEventListener('dblclick', clickFonksiyonu);
function clickFonksiyonu(){
    document.getElementById("text").innerHTML = "ÇİFT TIKLANDI";
}

// Klavye etkinliği ile aktivite eklendi.
const keyboard =document.querySelector('#fname');
keyboard.addEventListener("copy", cuttingFunction);
function cuttingFunction(event){
    console.log("etkinlik tipi: ", event.type)
}


// Form Etkinlikleri
const color = document.querySelector("#select");
color.addEventListener("change", selectBox);
function selectBox(event){
    console.log("Etkinlik tipi: ", event.type);
    console.log("değer: ", event.target.value);
}

/*İç içe elementlerde ,örneğin üzerine tıklanan bir eleman kendisini kapsayan elemanı da yazar. 
Adeta bir sabun köpürmesi mantığıyla dıştaki hedef elemente kadar ilerler. 
Buna event bubbling denir. 
İçten dışa bir aktarım söz konusudur*/

const selectBox2 = document.querySelector('#selectColor');
const button3 = document.querySelector('#button3');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox2.addEventListener('click' ,function(){
    console.log("selectBox");    
})
form.addEventListener('click',function(){
    console.log("form");
})
cerceve.addEventListener('click',function(){
    console.log('cerceve');
})
button3.addEventListener('click', function(){
    console.log("Button");
})

// event.stopPropagation event etkinliğini durdurur
// Bir etkinliğin özelliğini durdurmak için kullanılır. 
//Bir fonksiyon parametresi olarak girilen 
// "event" e bu etkinlik atanarak kullanılır.

// event.stopPropagation()


// BÖLÜM SONU EGZERSİZİ

let count = 0;
let arttir = document.querySelector("#increase");
let azalt = document.querySelector("#decrease");
let counter = document.querySelector("#counter");

counter.innerHTML = count;
arttir.addEventListener('click', increase); // fonksiyon adı clickEvent yap
azalt.addEventListener('click', decrease); // fonksiyon adı clickEvent yap

/*
function clickEvent(){
    if(this.id == "increase"){
        counter.innerHTML = counter += 1;
    }
    else{
        counter.innerHTML = counter -= 1;
    }
}
*/
function increase(){
    count +=1;
    counter.innerHTML = count;
}

function decrease(){
    count -=1;
    counter.innerHTML = count;
}






































