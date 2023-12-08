const BBDD = [
    {
        usuario: "Facundo",
        contraseña: "belsito",
    }
]

const usuarioALoguear = { usuario: "", contraseña: "" }
const inputUsuario = document.getElementById('username')
const inputConstraseña = document.getElementById('password')
const btnlogin = document.getElementById('loginButton');

inputUsuario.addEventListener("input", (e) => { // e -> objeto 



    usuarioALoguear.usuario = e.target.value

})


inputConstraseña.addEventListener("input", (e) => {

    usuarioALoguear.contraseña = e.target.value

})

btnlogin.addEventListener('click', () => {


    const user = BBDD.find((elemento) => { return usuarioALoguear.usuario === elemento.usuario && usuarioALoguear.contraseña === elemento.contraseña });
    
        localStorage.setItem("usuario",JSON.stringify({ usuario: usuarioALoguear.usuario })) 

    user ? window.location.href = 'index1.html' : alert('Credenciales inválidas. Inténtalo de nuevo.');
});


