// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 let amigos = [];

 // Muestra la lista inicial de amigos en la pantalla.
 agregarAmigos();

 function agregar() {
    // 1. Capturar el valor del campo de entrada
    const amigoInput = document.getElementById('nombre-amigo');
    const nuevoAmigo = amigoInput.value;

    // 2. Validar la entrada
    if (nuevoAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la función si el campo está vacío
    }

    // 3. Actualizar el array de amigos
    amigos.push(nuevoAmigo);

    // 4. Actualizar la lista en el HTML llamando a la función existente
    agregarAmigos();

    // 5. Limpiar el campo de entrada
    amigoInput.value = "";
 }

 function agregarAmigos(){
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById('amigo');

    // 2. Limpiar la lista existente
    lista.innerHTML = '';

    // 3. Iterar sobre el arreglo y 4. Agregar elementos a la lista
    for (let amigo of amigos) {
        // Crear un nuevo elemento de lista <li>
        const item = document.createElement('li');
        item.textContent = amigo;
        // Agregar el elemento <li> a la lista <ul>
        lista.appendChild(item);
    }
 }

 function sortear() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length < 2) {
        alert('¡Debes agregar al menos 2 amigos para realizar el sorteo!');
        return;
    }

    // 2. Generar un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const sorteado = amigos[indice];

    // 4. Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${sorteado}</strong>`;
 }
