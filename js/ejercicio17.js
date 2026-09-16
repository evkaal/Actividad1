
const manejarTareas = (() => {
    
    // Función privada (Scope local)
    const obtenerTareas = () => {
        // Recuperamos el string de LocalStorage, si no existe devolvemos un arreglo vacío
        const tareasGuardadas = localStorage.getItem('tareas_json');
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    };

    // Función privada (Scope local)
    const agregarTarea = (nuevaTarea) => {
        const tareas = obtenerTareas();
        tareas.push(nuevaTarea);
        // Convertimos el arreglo JavaScript a texto JSON para guardarlo
        localStorage.setItem('tareas_json', JSON.stringify(tareas));
    };

    // Función privada (Scope local)
    const eliminarTarea = (indice) => {
        const tareas = obtenerTareas();
        // Eliminamos 1 elemento en la posición indicada
        tareas.splice(indice, 1);
        localStorage.setItem('tareas_json', JSON.stringify(tareas));
    };

    // Retornamos solo las funciones que queremos exponer al exterior (API pública del closure)
    return {
        obtener: obtenerTareas,
        agregar: agregarTarea,
        eliminar: eliminarTarea
    };
})();


const renderizarTareas = () => {
    const lista = document.getElementById('lista-tareas');
    lista.innerHTML = ''; // Limpiamos la lista visualmente antes de recargar
    
    // Accedemos a los datos usando el método expuesto por el closure
    const tareas = manejarTareas.obtener();

    // Recorremos las tareas para crearlas en el HTML
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;

        // Botón para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';
        
        // Evento que lanza el SweetAlert de confirmación
        btnEliminar.onclick = () => confirmarEliminacion(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
};

// Función para confirmar la eliminación con SweetAlert2
const confirmarEliminacion = (indice) => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            manejarTareas.eliminar(indice); // Llamamos al closure
            renderizarTareas();             // Actualizamos la vista
            Swal.fire('¡Eliminada!', 'Tu tarea ha sido borrada.', 'success');
        }
    });
};


// Evento para el botón de agregar
document.getElementById('btn-agregar').addEventListener('click', () => {
    const input = document.getElementById('nueva-tarea');
    const textoTarea = input.value.trim();

    if (textoTarea === '') {
        Swal.fire('Error', 'Por favor, escribe una tarea válida.', 'error');
        return;
    }

    manejarTareas.agregar(textoTarea); // Guardamos la tarea
    input.value = '';                  // Limpiamos el input
    renderizarTareas();                // Actualizamos la vista visualmente
});

// Cargar las tareas automáticamente al abrir o recargar la página web
document.addEventListener('DOMContentLoaded', renderizarTareas);