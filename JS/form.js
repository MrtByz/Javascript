let formDOM = document.querySelector("#userForm")

formDOM.addEventListener("submit", formSubmit);

function formSubmit(event){
    event.preventDefault();
    // window.history.back();
    console.log("islem gerceklesti");
}