let nu1=document.getElementById(entradaDeNota1);
let nu2=document.getElementById(entradaDeNota2);
let nu3=document.getElementById(entradaDeNota3);
let nu4=document.getElementById(entradaDeNota4);
let nu5=document.getElementById(entradaDeNota5);
function suma(){

return nu1+nu2+nu3+nu4+nu5;
}
const mensaje = document.querySelector("#promedio");
const entradaDni = document.querySelector("#entradaDeDni");
const entradaNombre = document.querySelector("#entradaDeNombre");
const entradaApellido = document.querySelector("#entradaDeApellido");
const entradaMateria1 = document.querySelector("#entradaDeMateria1");
const entradaNota1 = document.querySelector("#entradaDeNota1");

const entradaMateria2 = document.querySelector("#entradaDeMateria2");
const entradaNota2 = document.querySelector("#entradaDeNota2");

const entradaMateria3 = document.querySelector("#entradaDeMateria3");
const entradaNota3 = document.querySelector("#entradaDeNota3");

const entradaMateria4 = document.querySelector("#entradaDeMateria4");
const entradaNota4 = document.querySelector("#entradaDeNota4");

const entradaMateria5 = document.querySelector("#entradaDeMateria5");
const entradaNota5 = document.querySelector("#entradaDeNota5");


const mensajeDocumento = document.querySelector(".mensajeDocumento");
const mensajepellido = document.querySelector(".mensajepellido");
const mensajeNombre = document.querySelector(".mensajeNombre");
const mensajeMateria = document.querySelector(".mensajeMateria1");
const mensajeNota = document.querySelector(".mensajeNota1");

const mensajeDocumento2 = document.querySelector(".mensajeDocumento2");
const mensajepellido2 = document.querySelector(".mensajeApellido2");
const mensajeNombre2 = document.querySelector(".mensajeNombre2");
const mensajeMateria2 = document.querySelector(".mensajeMateria2");
const mensajeNota2 = document.querySelector(".mensajeNota2");

const mensajeDocumento3 = document.querySelector(".mensajeDocumento3");
const mensajeApellido3 = document.querySelector(".mensajeApellido3");
const mensajeNombre3 = document.querySelector(".mensajeNombre3");
const mensajeMateria3 = document.querySelector(".mensajeMateria3");
const mensajeNota3 = document.querySelector(".mensajeNota3");

const mensajeDocumento4 = document.querySelector(".mensajeDocumento4");
const mensajepellido4 = document.querySelector(".mensajepellido4");
const mensajeNombre4 = document.querySelector(".mensajeNombre4");
const mensajeMateria4 = document.querySelector(".mensajeMateria4");
const mensajeNota4 = document.querySelector(".mensajeNota4");

const mensajeDocumento5 = document.querySelector(".mensajeDocumento5");
const mensajepellido5 = document.querySelector(".mensajepellido5");
const mensajeNombre5 = document.querySelector(".mensajeNombre5");
const mensajeMateria5 = document.querySelector(".mensajeMateria5");
const mensajeNota5 = document.querySelector(".mensajeNota5");

const mensajeDocumento6 = document.querySelector(".mensajeDocumento6");
const mensajepellido6 = document.querySelector(".mensajepellido6");
const mensajeNombre6 = document.querySelector(".mensajeNombre6");

const mensajeNota6 = document.querySelector(".mensajeNota5");
const mensajePromedio = document.querySelector("#promedio");

const evaluar = document.querySelector("#botonAdivinar");

evaluar.addEventListener("click", function(){

    mensajeDocumento.textContent = entradaDni.value;
    mensajepellido.textContent = entradaApellido.value;
    mensajeNombre.textContent = entradaNombre.value;
    mensajeMateria.textContent = entradaMateria1.value;
    mensajeNota.textContent = entradaNota1.value;

    mensajeDocumento2.textContent = entradaDni.value;
    mensajepellido2.textContent = entradaApellido.value;
    mensajeNombre2.textContent = entradaNombre.value;
    mensajeMateria2.textContent = entradaMateria2.value;
    mensajeNota2.textContent = entradaNota2.value;

    mensajeDocumento3.textContent = entradaDni.value;
    mensajeApellido3.textContent = entradaApellido.value;
    mensajeNombre3.textContent = entradaNombre.value;
    mensajeMateria3.textContent = entradaMateria3.value;
    mensajeNota3.textContent = entradaNota3.value;

    mensajeDocumento4.textContent = entradaDni.value;
    mensajepellido4.textContent = entradaApellido.value;
    mensajeNombre4.textContent = entradaNombre.value;
    mensajeMateria4.textContent = entradaMateria4.value;
    mensajeNota4.textContent = entradaNota4.value;

    mensajeDocumento5.textContent = entradaDni.value;
    mensajepellido5.textContent = entradaApellido.value;
    mensajeNombre5.textContent = entradaNombre.value;
    mensajeMateria5.textContent = entradaMateria5.value;
    mensajeNota5.textContent = entradaNota5.value;

    mensajeDocumento6.textContent = entradaDni.value;
    mensajepellido6.textContent = entradaApellido.value;
    mensajeNombre6.textContent = entradaNombre.value;
    
     
mensajePromedio.textContent = suma();

});
