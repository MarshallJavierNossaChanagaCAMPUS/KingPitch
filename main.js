let loginButton = document.querySelector("#loginButton");
let registerButton = document.querySelector("#registerButton");

let mainIndex = document.querySelector(".main_index");
let modalLogin = document.querySelector(".modal_login");
let modalRegister = document.querySelector(".modal_register");



let loginForm = document.querySelector("#loginForm");

loginButton.addEventListener("click", (e) => {
    mainIndex.classList.add("modal_ocultar");
    modalLogin.classList.remove("modal_ocultar");
});

registerButton.addEventListener("click", (e) => {
    mainIndex.classList.add("modal_ocultar");
    modalRegister.classList.remove("modal_ocultar");
})