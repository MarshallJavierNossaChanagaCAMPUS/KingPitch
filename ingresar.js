import {urlUser} from './registrar.js'
const iniciarSesion = document.querySelector('#loginForm');

iniciarSesion.addEventListener('submit', autentificacion)



async function autentificacion(e){
    e.preventDefault()
    async function getDataUsers(){
        try {
        const response = await fetch(urlUser)
        console.log(response);
        let result = await response.json()
        console.log(result);
        const nameX = document.querySelector('#name').value;
        const passwordX = document.querySelector('#password').value;
        console.log('hola');
        result.forEach(datos=>{
        console.log( datos.usuario);
        console.log( datos.contraseña);
        if(datos.usuario === nameX && datos.contraseña === passwordX){
            alert('Sesion iniciada');
            window.location.replace("/html/inicio.html")
                return
            }else{
                alert("Usuario incorrecto")
            }
            })
            }catch (error) {}} 
    await getDataUsers()
}
