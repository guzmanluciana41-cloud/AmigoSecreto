
let listaAmigos = [];

function agregarAmigo() {

    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    console.log("Intentando agregar amigo:", nombre);

    //solo acepta letras y espacios, minimo 2 caracteres
    const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/.test(nombre);

    if (!nombreValido) {
        alert("Solo se permiten letras y espacios. No ingreses números ni caracteres especiales.");
        console.log("Nombre inválido, no se agrega:", nombre);
        input.value = "";
        return listaAmigos;
    }

    if (nombre) {
        if(listaAmigos.includes(nombre)) {
            alert("Ese nombre ya fue agregado. Escribe uno diferente.");
            console.log("Nombre repetido, no se agrega:", nombre);
        } else {
            listaAmigos.push(nombre);
            console.log("Nombre agregado:", nombre);
            mostrarLista();
            input.value = ""; // limpiar el input
       }
     
    }
   console.log("Lista actual de amigos:", listaAmigos);
   return listaAmigos;
}




function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
    console.log("Mostrando lista en la web:", listaAmigos);
}
console.log(mostrarLista);




function sortearAmigo() {
    const botonSortear = document.querySelector('.button-draw');
    if (botonSortear.disabled) return; // Es para evitar múltiples sorteos
  
    if (listaAmigos.length < 3) {
        alert("Agrega al menos dos amigos para sortear, aparte de tu nombre.");
        return;
    }
    let listSorteada = [...listaAmigos];
    listSorteada.sort(() => Math.random() - 0.5);
    mostrarResultado(listSorteada);

    // desactiva el botón después de sortear
    botonSortear.disabled = true;

    // desactiva el input y el botón de agregar amigo
    document.getElementById("amigo").disabled = true;
    document.querySelector(".button-add").disabled = true;
}



function mostrarResultado(lista) {
    const nombreUsuario = prompt("¿Cuál es tu nombre?");
    const ul = document.getElementById("resultado");
    ul.innerHTML = "";

    const index = lista.indexOf(nombreUsuario);
    if (index === -1) {
        ul.innerHTML = `<li>Tu nombre no está en la lista.</li>`;
        return;
    }
    const siguiente = lista[(index + 1) % lista.length];
    const li = document.createElement("li");
    li.textContent = `A ti te toca: ${siguiente}`;
    li.style.color = "black"; // cambia al color negro parael mensaje
    ul.appendChild(li);

    // Para que lo lea en la consola
    lista.forEach((amigo, i) => {
        const siguiente = lista[(i + 1) % lista.length];
        console.log(`${amigo} le regala a ${siguiente}`);
    });
}