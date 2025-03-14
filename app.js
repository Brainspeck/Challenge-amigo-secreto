// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo () {
    let valorInput = document.getElementById("amigo").value;
    if (!valorInput){
        alert("Por favor, inserte un nombre.");
    }

    else {
        amigos.push(valorInput);
        crearLista()
        document.getElementById("amigo").value = '';
        console.log(amigos);
    };
    
};

function crearLista (){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i=0; i < amigos.length; i++){
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`
    };
};

function sortearAmigo () {
    if (amigos.length === 0) {
        alert(`Debe agregar amigos a la lista primero`);
        return;
    }
    let indiceRandom = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceRandom];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
}