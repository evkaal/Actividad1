// Seleccionar los elementos importantes del DOM
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// Función para agregar un nuevo elemento a la lista
const agregarElemento = () => {
    const texto = input.value.trim(); // Obtiene el valor y elimina espacios innecesarios

    if (texto !== '') {
        // Crear un nuevo elemento 'li'
        const li = document.createElement('li');
        
        // Asignar clases de Bootstrap al <li> para darle estilo y alinear el botón a la derecha
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);

        // Crear el botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        
        // Asignar clases de Bootstrap al botón (rojo y pequeño)
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');

        // Evento para eliminar el elemento del DOM
        botonEliminar.addEventListener('click', () => {
            li.remove();
        });

        // Añadir el botón al li
        li.appendChild(botonEliminar);

        // Agregar el li a la lista
        lista.appendChild(li);

        // Limpiar el campo de texto y devolver el foco
        input.value = '';
        input.focus();
    } else {
        // Usar SweetAlert2 en lugar del alert() estándar
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, escribe algo para agregar a la lista.',
            confirmButtonColor: '#0d6efd' // Color primario de Bootstrap
        });
    }
};

// Asignar la función al botón de agregar
botonAgregar.addEventListener('click', agregarElemento);

// Permitir agregar elementos presionando la tecla 'Enter'
input.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});