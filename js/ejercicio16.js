// 1. Funciones flecha para las operaciones básicas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

// 2. Función principal
const calcularOperacion = (operacion) => {
    // Obtener los valores de los campos de texto
    const input1 = document.getElementById('numero1').value;
    const input2 = document.getElementById('numero2').value;

    // Convertir a números
    const numero1 = parseFloat(input1);
    const numero2 = parseFloat(input2);

    // 3. Validación: Verificar si los valores ingresados son números válidos
    if (isNaN(numero1) || isNaN(numero2) || input1.trim() === '' || input2.trim() === '') {
        // Alerta de error usando SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Datos inválidos',
            text: 'Por favor, ingresa únicamente valores numéricos en ambos campos.',
            confirmButtonColor: '#3085d6'
        });
        
        // Limpiar la caja de resultado si hay error
        document.getElementById('resultado').value = '';
        return; // Detener la ejecución
    }

    let resultadoFinal;

    // 4. Evaluar la operación seleccionada y llamar a la función flecha correspondiente
    switch (operacion) {
        case 'suma':
            resultadoFinal = sumar(numero1, numero2);
            break;
        case 'resta':
            resultadoFinal = restar(numero1, numero2);
            break;
        case 'multiplicacion':
            resultadoFinal = multiplicar(numero1, numero2);
            break;
        case 'division':
            resultadoFinal = dividir(numero1, numero2);
            // Mostrar una alerta extra si ocurre la división por cero
            if (resultadoFinal === 'Error: División por cero') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación no permitida',
                    text: 'No es posible dividir un número entre cero.',
                    confirmButtonColor: '#f8bb86'
                });
            }
            break;
        default:
            resultadoFinal = 'Operación desconocida';
    }

    // Mostrar el resultado en el input de solo lectura
    document.getElementById('resultado').value = resultadoFinal;
};