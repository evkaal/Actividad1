function calcular() {
    // Obtener el valor de la caja de texto
    var Numeros = document.getElementById('txtNumeros').value;
    var Mayor = document.getElementById('txtMayor');
    var Menor = document.getElementById('txtMenor');
    var Promedio = document.getElementById('txtPromedio');

    // Limpiar la caja de resultado cada vez que se presiona el botón
    Mayor.value = "";
    Menor.value = "";
    Promedio.value = "";

    /**
     * Validación 1: que no esté vacio pero si se hace de la merna tradicional 
     * y el usuario le llega a presionar con la barra espaciadora el campo toma
     * como si no estuviera vacias, con trim nos permite eliminar todos los
     * espacios vacios */ 
    if (Numeros.trim() == "") {
        alert("Por favor, ingresa una serie de números.");
        return; // Detiene la función
    }

    // Convertir el texto a un arreglo de números reales
    // Separa por comas o espacios, limpia textos vacíos y convierte a número
    let num = Numeros.split(/[, ]+/).map(Number).filter(n => !isNaN(n));

    // Validación 2: Que realmente existan números válidos en el arreglo
    if (num.length === 0) {
        alert("El valor ingresado debe contener números válidos.");
        return;
    }

    // Encontrar mayor y menor usando el operador de propagación (...)
    let maximo = Math.max(...num);
    let minimo = Math.min(...num);

    // Calcular la suma y el promedio
    let suma = num.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / num.length;

    // Asignar los resultados a las cajas de texto correspondientes
    Mayor.value = maximo;
    Menor.value = minimo;
    Promedio.value = promedio.toFixed(2); // Redondea a 2 decimales para limpieza
}
