const register = document.querySelector('#registroForm');

register.addEventListener('submit', ingresarUsuario)


//Ingresar y validar nuevo usuario / REGISTER

async function ingresarUsuario(e){
    e.preventDefault()
    let nuevoUsuario = Object.fromEntries(new FormData(e.target));

    if(validate(nuevoUsuario)){
        alert('todos los expacios deben ser rellenados')
        return
    }
    registrarUsuario(nuevoUsuario)
    console.log(nuevoUsuario);
}

export const urlUser = 'http://localhost:5555/usuarios'

    
// url usuario base de datos
export const registrarUsuario= async nuevoUsuario=>{
    console.log(nuevoUsuario);
    try{
        await fetch(urlUser,{
        method:'POST',
        body: JSON.stringify(nuevoUsuario),
        headers:{'Content-Type':'application/json'}
    })
    window.location.href='index.html'
}catch(error){
        console.log(error);
    }
}

export function validate(object){
    return !Object.values(object).every(element=> element !== '')
}