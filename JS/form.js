let formDOM = document.querySelector("#userForm")

formDOM.addEventListener("submit", formSubmit);

function formSubmit(event){
    event.preventDefault();
    // window.history.back();
    console.log("islem gerceklesti");
    let scoreInputDOM = document.querySelector("#score");
    console.log(scoreInputDOM.value);
    localStorage.setItem("score", scoreInputDOM.value)
}


// Bölüm Sonu Egzersizi


// Formu Seç
// Input Bilgisini UL içerisine ekle
// Form İçindeki Bilgiyi Sıfırla
// Eğer Forma Bilgi Girilmezse Kullanıcıyı Uyar


let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener('submit', formHandler);
// userFormDOM.addEventListener('reset', formHandler);

function formHandler(event){
    event.preventDefault();
    const USER_NAME = document.querySelector("#name");
    const SCORE = document.querySelector("#score");
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value);
        USER_NAME.value = ""
        SCORE.value = ""
    }
    else{
        alert("Eksik Bilgi Girildi!")
        USER_NAME.value = ""
        SCORE.value = ""
    }
}

/*
<li class="list-group-item d-flex justify-content-between align-items-center">
    Murat
    <span class="badge bg-primary rounded-pill">100</span>
</li>
*/
let userListDOM = document.querySelector("#userList");
function addItem(userName, score){
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `
        ${userName} 
        <span class="badge bg-primary rounded-pill">${score}</span>
    `;
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM);
}




