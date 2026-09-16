let estudiantes = [];

const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const listaEstudiantes = document.getElementById('listaEstudiantes');

const txtPromedio = document.getElementById('promedio');
const txtMaxima = document.getElementById('maxima');
const txtMinima = document.getElementById('minima');

// agregar estudiante
btnAgregar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    const calificacionStr = inputCalificacion.value.trim();

    // Validaciones adicionales
    if (nombre === '' || calificacionStr === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const calificacion = parseFloat(calificacionStr);

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        alert('Por favor, ingresa una calificación válida (número entre 0 y 100).');
        return;
    }

    // se crea un objeto
    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);

    actualizarListaVisual();

    // Limpiar campos de entrada
    inputNombre.value = '';
    inputCalificacion.value = '';
    inputNombre.focus();
});


function actualizarListaVisual() {
    listaEstudiantes.innerHTML = '';
    estudiantes.forEach(estudiante => {
        let li = document.createElement('li');
        li.textContent = `${estudiante.nombre} - Calificación: ${estudiante.calificacion}`;
        listaEstudiantes.appendChild(li);
    });
}


btnCalcular.addEventListener('click', () => {
    if (estudiantes.length === 0) {
        alert('Primero debes agregar al menos un estudiante.');
        return;
    }

    // Calcular promedio usando reduce()
    let sumaCalificaciones = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = sumaCalificaciones / estudiantes.length;
    txtPromedio.value = promedio.toFixed(2);

    // Encontrar calificación más alta y más baja
    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteMax = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMin = estudiantes.find(e => e.calificacion === calificacionMinima);

    txtMaxima.value = `${estudianteMax.nombre} (${estudianteMax.calificacion})`;
    txtMinima.value = `${estudianteMin.nombre} (${estudianteMin.calificacion})`;
});