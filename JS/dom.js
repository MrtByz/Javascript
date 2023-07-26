// pathname
console.log("Doküman pathi", document.location.pathname)

// document head
console.log(document.head)

// document body
console.log(document.body)

// change background color of body
// bu değişiklikleri css yerine jste yapma sebebş
document.body.style.backgroundColor = "green"

// dom içerisinden id ve etiket ile öge seçimi

// tag kullanarak
let h2 = document.getElementsByTagName("h2")
console.log(h2.title.innerHTML)

// Id kullanarak

let title = document.getElementById("title")
console.log(title.innerHTML)

title.innerHTML = "Yazıyı değiştirdim!"
console.log(title.innerHTML)

// Listedeki linke ulaşma

let link = document.querySelector("ul#list>li>a")
console.log(link.innerHTML)

// linkin styleını değiştirme
link.style.color = "red"

// linke class ekle
link.classList.add("btn")

// propmpt ile kullanıcıdan bilgi almak
let user = prompt("Lütfen Adınızı Giriniz...")
console.log(user)
let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${user}</small>`


// Liste içindeki ögeye erişmek
// hello_world.htmldeki listem idli listenin elemanlarına erişmeye çalışalım

let item = document.querySelector("ul#listem>li:last-child")
console.log("Listenin son elemanı: ", item.innerHTML)
item = document.querySelector("ul#listem>li:first-child")
console.log("Listenin ilk elemanı: ", item.innerHTML)

// listeye yeni eleman ekleme

let ulDOM = document.querySelector("ul#listem")
let liDOM = document.createElement("li")
liDOM.innerHTML = "Kendi oluşturduğum öğe"

// sona ekleme
ulDOM.append(liDOM)

// başa ekleme
let liDOM2 = document.createElement("li")
liDOM2.innerHTML = "Başa "+ liDOM.innerHTML
ulDOM.prepend(liDOM2)


// Doma css class bilgisi eklemek

let greeting_class = document.querySelector("#greeting")
greeting_class.classList.add("text-primary")
console.log(greeting.classList)

// classListten class silme
/greeting.classList.remove("second-class")


































