//el boton estará disabled hasta que se confirmen todos los campos
  var boton = document.getElementById("boton");
  boton.disabled=true;

  //Validamos el nombre, apellido y mail con una expresión regular y en caso de true, cambiamos a verde el shadow

function validarNombre(elemento) {
    let falso=false;

    let expresion = /\D[^@"]/;
    if (expresion.test(elemento.value)) {
        elemento.style.boxShadow = "0 0 8px 1px green";
        falso=true;
        return falso;

    } else {
        elemento.style.boxShadow = "0 0 8px 1px red";
        return false;
    }
    

}

function validarMail(elemento) {
    let falso=false;
    let expresion = /.*[\S].*@.*[\S].*/;
    if (expresion.test(elemento.value)) {
        elemento.style.boxShadow = "0 0 8px 1px green";
        falso=true;
        return falso;

    } else {
        elemento.style.boxShadow = "0 0 8px 1px red";
        return false;
    }
    
    
}

function validarApellido(elemento) {
    let falso=false;

    let expresion = /\D[^@"]/;
    if (expresion.test(elemento.value)) {
        elemento.style.boxShadow = "0 0 8px 1px green";
        falso=true;
        return falso;
    } else {
        elemento.style.boxShadow = "0 0 8px 1px red";
        return falso;
    }
  
    
}
/*
Comprobamos que todos los elementos input son correctos y entonces habilitamos 
el boton cambiando disabled a true
*/
function comprobarTodo() {

    let nom = validarNombre(nombre);
    let ape = validarApellido(apellidos);
    let em = validarMail(email);

    console.log (nom + ape + em);
  

    if (nom === true && ape === true && em === true) {
      boton.disabled= false;
    } else {
        boton.disabled= true;
    }

}

//Validamos según introducimos caracteres

window.addEventListener("load",()=>{
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var email = document.getElementById("email");
var alerta=document.querySelector(".alert");
var boton=document.getElementById("boton");


    nombre.addEventListener("keyup", ()=>{
        validarNombre(nombre);
        comprobarTodo();
    });
    apellidos.addEventListener("keyup", ()=>{
        validarApellido(apellidos);
        comprobarTodo();
    });
    email.addEventListener("keyup", ()=>{
        validarMail(email);
        comprobarTodo();
    });

//Al hacer click en el boton, todo está correcto
    boton.addEventListener("click", (ev)=>{
        ev.preventDefault();
        alerta.style.display="block";
        


    })

    

});





