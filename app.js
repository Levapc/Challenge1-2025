// Variable para los nombres
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el nombre desde el input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar el nombre ingresado
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir nombre al final de la lista
    amigos.push(nombre);

    // limpiar entrada paraelproximo nombre
    input.value = "";

    // Actualizar la lista de amigos visible en pantalla
    mostrarLista();
}

//  Función para mostrar la lista en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // vaciar lista antes de volver a cargar los nombres en pantalla

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya nombres en el array
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

// Generar un índice aleatorio
const indice = Math.floor(Math.random() * amigos.length);

// Obtener el nombre sorteado
const amigoSecreto = amigos[indice];

// Mostrar el resultado en pantalla
const resultado = document.getElementById("resultado");
resultado.innerHTML = `<li>Felicidades! tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
